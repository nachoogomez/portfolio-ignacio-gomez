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

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const { i18n } = useTranslation();

	const handleDownloadCV = () => {
		// Aquí puedes poner la ruta real de tu CV
		const link = document.createElement("a");
		link.href = "/CV-Ignacio-Gomez.pdf";
		link.download = "CV-Ignacio-Gomez.pdf";
		link.click();
	};

	const toggleLanguage = () => {
		const newLang = i18n.language === "es" ? "en" : "es";
		i18n.changeLanguage(newLang);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="shrink-0">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
							IG
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-2">
						{/* Language Toggle */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleLanguage}
							aria-label="Cambiar idioma"
						>
							<Languages className="h-5 w-5" />
							<span className="sr-only">
								{i18n.language === "es"
									? "Cambiar a inglés"
									: "Switch to Spanish"}
							</span>
						</Button>

						{/* Theme Toggle */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon" aria-label="Cambiar tema">
									<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
									<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
									<span className="sr-only">Cambiar tema</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem onClick={() => setTheme("light")}>
									Claro
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("dark")}>
									Oscuro
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("system")}>
									Sistema
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* Download CV Button */}
						<Button onClick={handleDownloadCV} size="sm" className="gap-2">
							<Download className="h-4 w-4" />
							<span className="hidden sm:inline">CV</span>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
