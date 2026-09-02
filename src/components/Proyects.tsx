import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Eye } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

type Project = {
	id: string;
	link?: string;
	demo?: string;
	tags: string[];
	featured?: boolean;
};

/** Static metadata — copy is resolved through i18n at render time. */
const PROJECTS: Project[] = [
	{
		id: "project1",
		link: "https://github.com/nachoogomez/its-microservice",
		tags: [
			"Nestjs",
			"Express",
			"PostgreSQL",
			"Docker",
			"TypeScript",
			"MySQL",
			"MongoDB",
			"Angular",
			"RxJs",
		],
	},
	{
		id: "project3",
		link: "https://github.com/nachoogomez/quadra",
		demo: "https://getquadra.vercel.app/",
		tags: ["NextJS", "TypeScript", "Supabase", "shadcn/ui"],
		featured: true,
	},
	{
		id: "project4",
		demo: "https://jlgroup.com.ar",
		tags: ["React", "Vite", "Tailwind CSS"],
	},
	{
		id: "project5",
		demo: "https://programadoresargentina.com",
		tags: [
			"NextJS",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"NextAuth",
			"MercadoPago",
			"Zod",
			"Nodemailer",
			"Java"
		],
	},
];

const featuredProject = PROJECTS.find((project) => project.featured);
const regularProjects = PROJECTS.filter((project) => !project.featured);

function TagList({ tags }: { tags: string[] }) {
	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => (
				<span
					key={tag}
					translate="no"
					className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
				>
					{tag}
				</span>
			))}
		</div>
	);
}

export function Proyects() {
	const { t } = useTranslation();

	return (
		<section
			id="projects"
			className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
		>
			<div className="max-w-6xl mx-auto">
				<SectionHeading
					eyebrow={t("projects.title")}
					title={t("projects.subtitle")}
				/>

				{/* Featured project — full width */}
				{featuredProject && (
					<Card className="p-8 mb-6 hover:bg-accent/50 transition-colors border-primary/20 hover:border-primary/40">
						<div className="flex flex-col sm:flex-row sm:items-start gap-6">
							<div className="flex-1 min-w-0 space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
										{t("projects.featured")}
									</span>
									<h3 className="font-bold text-2xl text-balance break-words">
										{t(`projects.${featuredProject.id}.title`)}
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed max-w-2xl text-pretty">
									{t(`projects.${featuredProject.id}.description`)}
								</p>
								<TagList tags={featuredProject.tags} />
								<div className="flex flex-wrap gap-3 pt-1">
									{featuredProject.link && (
										<Button variant="outline" size="sm" asChild>
											<a
												href={featuredProject.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2"
											>
												<ExternalLink className="h-4 w-4" aria-hidden="true" />
												{t("projects.code")}
											</a>
										</Button>
									)}
									{featuredProject.demo && (
										<Button variant="default" size="sm" asChild>
											<a
												href={featuredProject.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2"
											>
												<Eye className="h-4 w-4" aria-hidden="true" />
												{t("projects.demo")}
											</a>
										</Button>
									)}
								</div>
							</div>
						</div>
					</Card>
				)}

				{/* Regular projects */}
				<div className="grid gap-6 sm:grid-cols-2 mx-auto">
					{regularProjects.map((project) => (
						<Card
							key={project.id}
							className="p-6 hover:bg-accent/50 transition-colors flex flex-col h-full"
						>
							<div className="flex-1 min-w-0 space-y-3">
								<h3 className="font-semibold text-lg text-balance break-words">
									{t(`projects.${project.id}.title`)}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed text-pretty">
									{t(`projects.${project.id}.description`)}
								</p>
								<TagList tags={project.tags} />
							</div>
							<div className="flex gap-2 mt-4">
								{project.link && (
									<Button
										variant="outline"
										size="sm"
										asChild
										className="flex-1"
									>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 justify-center"
										>
											<ExternalLink className="h-4 w-4" aria-hidden="true" />
											{t("projects.code")}
										</a>
									</Button>
								)}
								{project.demo && (
									<Button
										variant={project.link ? "default" : "outline"}
										size="sm"
										asChild
										className="flex-1"
									>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 justify-center"
										>
											<Eye className="h-4 w-4" aria-hidden="true" />
											{t("projects.visit")}
										</a>
									</Button>
								)}
							</div>
						</Card>
					))}
				</div>

				<div className="mt-8 text-center">
					<Button variant="outline" asChild>
						<a
							href="https://github.com/nachoogomez"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2"
						>
							<ExternalLink className="h-4 w-4" aria-hidden="true" />
							{t("projects.viewMore")}
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
