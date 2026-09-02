"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Languages, Moon, Sun } from "@/components/ui/icons";
import { CV_PATH } from "@/lib/cv";

const NAV_LINKS = [
	{ href: "#skills", key: "nav.skills" },
	{ href: "#projects", key: "nav.projects" },
	{ href: "#about", key: "nav.about" },
	{ href: "#contact", key: "nav.contact" },
] as const;

export function Navbar() {
	const { setTheme } = useTheme();
	const { t, i18n } = useTranslation();

	const nextLanguage = i18n.language === "es" ? "en" : "es";

	const toggleLanguage = () => {
		i18n.changeLanguage(nextLanguage);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between gap-4">
					{/* Logo */}
					<a
						href="#main"
						className="shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						<span
							className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg"
							aria-hidden="true"
						>
							IG
						</span>
						<span className="sr-only" translate="no">
							Ignacio Gomez
						</span>
					</a>

					{/* Section navigation */}
					<ul className="hidden md:flex items-center gap-1">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
								>
									{t(link.key)}
								</a>
							</li>
						))}
					</ul>

					{/* Actions */}
					<div className="flex items-center gap-2">
						{/* Language Toggle */}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLanguage}
							className="gap-1.5"
							aria-label={t("nav.switchLanguage")}
						>
							<Languages className="h-5 w-5" aria-hidden="true" />
							<span
								className="text-xs font-semibold uppercase"
								translate="no"
								aria-hidden="true"
							>
								{nextLanguage}
							</span>
						</Button>

						{/* Theme Toggle */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									aria-label={t("nav.changeTheme")}
								>
									<Sun
										className="h-5 w-5 rotate-0 scale-100 transition-[transform,opacity] dark:-rotate-90 dark:scale-0"
										aria-hidden="true"
									/>
									<Moon
										className="absolute h-5 w-5 rotate-90 scale-0 transition-[transform,opacity] dark:rotate-0 dark:scale-100"
										aria-hidden="true"
									/>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => setTheme("light")}>
									{t("theme.light")}
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("dark")}>
									{t("theme.dark")}
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("system")}>
									{t("theme.system")}
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Download CV — a real link, so Cmd+click and "save as" work */}
						<Button asChild size="sm" className="gap-2">
							<a
								href={CV_PATH}
								download
								aria-label={t("hero.downloadCV")}
								className="inline-flex items-center"
							>
								<Download className="h-4 w-4" aria-hidden="true" />
								<span className="hidden sm:inline" aria-hidden="true">
									CV
								</span>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
