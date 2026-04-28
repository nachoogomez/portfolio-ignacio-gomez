import { useTranslation } from "react-i18next";
import {
	TypingText,
	TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import { Download, Mail } from "@/components/ui/icons";
import { Spotlight } from "@/components/ui/spotlight";

const techBadges = [
	{ label: "TypeScript", color: "bg-blue-400" },
	{ label: "React", color: "bg-cyan-400" },
	{ label: "Node.js", color: "bg-green-400" },
];

const stackConfig = {
	infrastructure: ["AWS Lambda", "Docker", "K8s"],
	backend: ["NestJS", "MongoDB", "Redis"],
};

export function Hero() {
	const { t } = useTranslation();

	return (
		<section className="relative flex min-h-screen items-center px-4 pt-16 pb-16 sm:px-6 lg:px-8">
			<Spotlight
				className="bg-primary/30 blur-3xl"
				size={400}
				springOptions={{ bounce: 0.2, duration: 0.3 }}
			/>

			<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

			<div
				className="pointer-events-none absolute inset-0"
				style={{
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
					`,
					backgroundSize: "40px 40px",
					maskImage:
						"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
				}}
			/>

			<div className="container relative z-10 mx-auto max-w-6xl w-full">
				<div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
					{/* ── Left column ── */}
					<div>
						{/* Availability badge */}
						<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium mb-6 animate-fade-in delay-100">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
							</span>
							{t("hero.available")}
						</div>

						{/* Tech badges */}
						<div className="flex flex-wrap gap-2 mb-8 animate-fade-in delay-300">
							{techBadges.map((badge) => (
								<div
									key={badge.label}
									className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-border/60 text-xs font-mono shadow-sm backdrop-blur-sm"
								>
									<span className={`h-2 w-2 rounded-full ${badge.color}`} />
									{badge.label}
								</div>
							))}
						</div>

						{/* Heading */}
						<h1 className="mb-5 font-bold tracking-tight animate-fade-in-up delay-200">
							<span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground">
								{t("hero.greeting.prefix")}
							</span>
							<TypingText
								text="Ignacio Gomez"
								delay={500}
								duration={50}
								loop={false}
								className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-primary"
							>
								<TypingTextCursor className="ml-1 h-12! w-1! rounded-full" />
							</TypingText>
						</h1>

						{/* Role */}
						<p className="text-xl font-medium text-muted-foreground mb-4 animate-fade-in-up delay-300">
							{t("hero.title")}
						</p>

						{/* Description */}
						<p className="mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-in-up delay-500">
							{t("hero.description")}
						</p>

						{/* Social links */}
						<div className="mb-8 flex gap-3 animate-fade-in-up delay-600">
							<a
								href="https://www.linkedin.com/in/ignaciogomezskamelka"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-[background-color,transform] hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
								aria-label="LinkedIn"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://github.com/nachoogomez"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-[background-color,transform] hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
								aria-label="GitHub"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="mailto:ignaciogomezdev@gmail.com"
								className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-[background-color,transform] hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" aria-hidden="true" />
							</a>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
							<a
								href="#contact"
								className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
							>
								{t("hero.connect")}
								<span className="font-light opacity-80">+</span>
							</a>
							<a
								href="/CV_Ignacio_Gomez_EN.pdf"
								download="CV_Ignacio_Gomez_EN.pdf"
								className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all hover:scale-105"
							>
								<Download className="h-4 w-4" />
								{t("hero.downloadCV")}
							</a>
						</div>
					</div>

					{/* ── Right column — decorative stack panel ── */}
					<div className="relative hidden lg:flex flex-col justify-center items-center min-h-[480px]">
						{/* Watermark text */}
						<div className="absolute inset-0 flex flex-col justify-center items-end select-none pointer-events-none overflow-hidden">
							<span className="text-[3rem] xl:text-[3.5rem] font-black uppercase tracking-widest text-foreground/[0.04] leading-none whitespace-nowrap">
								SYSTEM ARCHITECT
							</span>
							<span className="text-[3rem] xl:text-[3.5rem] font-black uppercase tracking-widest text-foreground/[0.04] leading-none whitespace-nowrap">
								FULL STACK ENGR.
							</span>
						</div>

						{/* AWS badge — top right */}
						<div
							className="absolute top-0 right-0 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card/90 border border-border/60 backdrop-blur-sm shadow-lg animate-fade-in"
							style={{ animationDelay: "800ms" }}
						>
							<div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
								<span className="text-primary text-[10px] font-black font-mono tracking-tighter">
									AWS
								</span>
							</div>
							<div>
								<div className="text-[10px] uppercase tracking-widest text-primary font-semibold leading-none mb-1">
									Cloud Architect
								</div>
								<div className="text-sm font-semibold leading-none">
									AWS Specialist
								</div>
							</div>
						</div>

						{/* Stack config card */}
						<div
							className="w-full max-w-xs rounded-xl border border-border/50 bg-card/80 backdrop-blur-md shadow-2xl overflow-hidden animate-fade-in-up"
							style={{ animationDelay: "600ms" }}
						>
							<div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50 bg-muted/20">
								<span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
								<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
								<span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
								<span className="ml-2 text-xs font-mono text-muted-foreground tracking-wider">
									STACK_V2.CONFIG
								</span>
							</div>
							<div className="p-5 space-y-4">
								<div>
									<div className="flex items-center justify-between mb-3">
										<span className="text-xs uppercase tracking-widest font-semibold text-primary">
											Infrastructure
										</span>
										<span className="text-xs text-muted-foreground font-mono">
											01
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{stackConfig.infrastructure.map((tech) => (
											<span
												key={tech}
												className="px-2.5 py-1 rounded text-xs bg-secondary text-secondary-foreground font-mono"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div className="border-t border-border/40" />
								<div>
									<div className="flex items-center justify-between mb-3">
										<span className="text-xs uppercase tracking-widest font-semibold text-primary">
											Backend
										</span>
										<span className="text-xs text-muted-foreground font-mono">
											02
										</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{stackConfig.backend.map((tech) => (
											<span
												key={tech}
												className="px-2.5 py-1 rounded text-xs bg-secondary text-secondary-foreground font-mono"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Microservices badge — bottom right */}
						<div
							className="absolute bottom-0 right-0 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card/90 border border-border/60 backdrop-blur-sm shadow-lg animate-fade-in"
							style={{ animationDelay: "1000ms" }}
						>
							<div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
								<svg
									className="h-5 w-5 text-primary"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
									<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
									<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
								</svg>
							</div>
							<div>
								<div className="text-[10px] uppercase tracking-widest text-primary font-semibold leading-none mb-1">
									Architecture
								</div>
								<div className="text-sm font-semibold leading-none">
									Microservices
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
