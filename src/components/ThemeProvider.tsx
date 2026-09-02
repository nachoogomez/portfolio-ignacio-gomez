import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const THEME_COLORS: Record<ResolvedTheme, string> = {
	dark: "#0a0a0b",
	light: "#f8f6f2",
};

const DARK_QUERY = "(prefers-color-scheme: dark)";

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

const applyTheme = (resolved: ResolvedTheme) => {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute("content", THEME_COLORS[resolved]);
};

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "portfolio-theme",
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const stored = localStorage.getItem(storageKey);
		return stored === "light" || stored === "dark" || stored === "system"
			? stored
			: defaultTheme;
	});

	useEffect(() => {
		if (theme !== "system") {
			applyTheme(theme);
			return;
		}

		const query = window.matchMedia(DARK_QUERY);
		const sync = () => applyTheme(query.matches ? "dark" : "light");

		sync();
		// Keep following the OS while "system" is selected — not just on reload.
		query.addEventListener("change", sync);
		return () => query.removeEventListener("change", sync);
	}, [theme]);

	const value = useMemo(
		() => ({
			theme,
			setTheme: (next: Theme) => {
				localStorage.setItem(storageKey, next);
				setTheme(next);
			},
		}),
		[theme, storageKey],
	);

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
