import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Eye } from "@/components/ui/icons";

export function Proyects() {
	const { t } = useTranslation();

	const projects = [
		{
			title: t("projects.project1.title"),
			description: t("projects.project1.description"),
			link: "https://github.com/nachoogomez/its-microservice",
			demo: undefined,
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
			title: t("projects.project2.title"),
			description: t("projects.project2.description"),
			link: "https://github.com/nachoogomez/MultiversoHub-Rick-Morty-",
			demo: undefined,
			tags: ["React Native", "Expo", "Tailwind", "TypeScript", "AsyncStorage"],
		},
		{
			title: t("projects.project3.title"),
			description: t("projects.project3.description"),
			link: "https://github.com/nachoogomez/my-notion",
			demo: "https://my-notion-lime.vercel.app/",
			tags: ["React", "TypeScript", "Supabase", "shadcn/ui"],
		},
	];

	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
					{t("projects.title")}
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 mx-auto">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="p-6 hover:bg-accent/50 transition-colors flex flex-col h-full"
						>
							<div className="flex-1 space-y-3">
								<div className="flex items-start justify-between">
									<h3 className="font-semibold text-lg">{project.title}</h3>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
							<div className="flex gap-2 mt-4">
								<Button variant="outline" size="sm" asChild className="flex-1">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 justify-center"
									>
										<ExternalLink className="h-4 w-4" />
										{t("projects.code")}
									</a>
								</Button>
								{project.demo && (
									<Button
										variant="default"
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
											<Eye className="h-4 w-4" />
											{t("projects.demo")}
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
							<ExternalLink className="h-4 w-4" />
							{t("projects.viewMore")}
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
