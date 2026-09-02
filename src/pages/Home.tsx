import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AboutSection } from "../components/About-section";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Proyects } from "../components/Proyects";
import { SkillsSection } from "../components/Skills-section";

// Lazy load ContactSection (incluye EmailJS)
const ContactSection = lazy(() =>
	import("../components/Contact-section").then((module) => ({
		default: module.ContactSection,
	})),
);

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen relative">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
			>
				{t("nav.skipToContent")}
			</a>
			<Navbar />
			<main id="main">
				<Hero />
				<SkillsSection />
				<Proyects />
				<AboutSection />
				<Suspense
					fallback={
						<section className="py-20 bg-muted/30">
							<div className="container mx-auto px-4 sm:px-6 lg:px-8">
								<div className="max-w-3xl mx-auto text-center">
									<p className="text-muted-foreground">{t("common.loading")}</p>
								</div>
							</div>
						</section>
					}
				>
					<ContactSection />
				</Suspense>
			</main>
			<Footer />
		</div>
	);
};
