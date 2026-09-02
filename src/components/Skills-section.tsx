import { useTranslation } from "react-i18next";
import { Cloud, Code2, Database, Layers } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
	{
		category: "Frontend",
		icon: Code2,
		iconColor: "text-blue-500 dark:text-blue-400",
		iconBg: "bg-blue-500/10",
		techs: ["React & Next.js", "Tailwind CSS", "TypeScript", "Angular"],
	},
	{
		category: "Backend",
		icon: Layers,
		iconColor: "text-teal-600 dark:text-teal-400",
		iconBg: "bg-teal-500/10",
		techs: ["Node.js & Express", "C# & .NET", "GraphQL"],
	},
	{
		category: "Cloud & DevOps",
		icon: Cloud,
		iconColor: "text-red-500 dark:text-red-400",
		iconBg: "bg-red-500/10",
		techs: ["AWS & Azure", "Docker & K8s", "CI/CD Pipelines"],
	},
	{
		category: "Mobile & DB",
		icon: Database,
		iconColor: "text-purple-600 dark:text-purple-400",
		iconBg: "bg-purple-500/10",
		techs: ["React Native", "PostgreSQL", "MongoDB", "Redis"],
	},
];

export function SkillsSection() {
	const { t } = useTranslation();

	return (
		<section
			id="skills"
			className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
		>
			<div className="max-w-6xl mx-auto">
				<SectionHeading
					eyebrow={t("about.skills.label")}
					title={t("about.skills.subtitle")}
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{skillGroups.map((group) => (
						<div
							key={group.category}
							className="rounded-xl border bg-card p-6 flex flex-col gap-4"
						>
							<div className={`p-3 rounded-lg w-fit ${group.iconBg}`}>
								<group.icon
									className={`h-6 w-6 ${group.iconColor}`}
									aria-hidden="true"
								/>
							</div>
							<h3 className="font-bold text-base">{group.category}</h3>
							<ul className="space-y-2">
								{group.techs.map((tech) => (
									<li
										key={tech}
										className="flex items-center gap-2 text-sm text-muted-foreground"
									>
										<span className="h-1.5 w-1.5 rounded-full bg-orange-500 dark:bg-orange-400 shrink-0" />
										<span translate="no">{tech}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
