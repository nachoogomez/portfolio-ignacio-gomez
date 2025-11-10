import { lazy, Suspense } from "react";
import { AboutSection } from "../components/About-section";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Proyects } from "../components/Proyects";

// Lazy load ContactSection (incluye EmailJS)
const ContactSection = lazy(() =>
	import("../components/Contact-section").then((module) => ({
		default: module.ContactSection,
	})),
);

export const Home = () => {
	return (
		<div className="min-h-screen relative">
			<Navbar />
			<main>
				<Hero />
				<AboutSection />
				<Proyects />
				<Suspense
					fallback={
						<section id="contact" className="py-20 bg-muted/30">
							<div className="container mx-auto px-4 sm:px-6 lg:px-8">
								<div className="max-w-3xl mx-auto text-center">
									<p className="text-muted-foreground">Cargando...</p>
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
