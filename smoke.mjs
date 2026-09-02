import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

const report = await page.evaluate(() => {
	const q = (s) => document.querySelector(s);
	const para = [...document.querySelectorAll("#about p")][0];
	return {
		htmlLang: document.documentElement.lang,
		htmlClass: document.documentElement.className,
		themeColor: q('meta[name="theme-color"]')?.content,
		h1: q("h1")?.innerText.replace(/\s+/g, " ").trim(),
		h1Font: q("h1") && getComputedStyle(q("h1")).fontFamily,
		bodyFont: getComputedStyle(document.body).fontFamily,
		headingLevels: [...document.querySelectorAll("h1,h2,h3")].map(
			(h) => h.tagName,
		),
		navLinks: [...document.querySelectorAll("nav a")].map((a) =>
			a.getAttribute("href"),
		),
		sectionIds: [...document.querySelectorAll("section[id]")].map((s) => s.id),
		// The Trans highlight must produce a real <strong>, not escaped markup.
		aboutHasStrong: !!para?.querySelector("strong"),
		aboutStrongText: para?.querySelector("strong")?.textContent,
		aboutRawTagLeak: /&lt;strong&gt;|<strong>/.test(para?.textContent ?? ""),
		skipLink: q('a[href="#main"]')?.textContent,
		liveRegions: document.querySelectorAll("[aria-live]").length,
	};
});

console.log(JSON.stringify(report, null, 2));
console.log("CONSOLE ERRORS:", errors.length ? errors : "none");
await browser.close();
