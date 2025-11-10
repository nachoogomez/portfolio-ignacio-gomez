import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "@/components/ui/icons";

export function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="border-t border-border mt-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
						<div className="space-y-2">
							<p className="text-sm text-muted-foreground">
								{t("footer.copyright")}
							</p>
						</div>
						<div className="flex gap-2">
							<Button variant="ghost" size="icon" asChild>
								<a
									href="https://github.com/nachoogomez"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<Github className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a
									href="https://www.linkedin.com/in/ignaciogomezskamelka/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<Linkedin className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a
									href="https://x.com/nachodev0s"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Twitter"
								>
									<Twitter className="h-5 w-5" />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="mailto:ignaciogomezdev@gmail.com" aria-label="Email">
									<Mail className="h-5 w-5" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
