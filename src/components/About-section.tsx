import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Code2, Layers, Users, Zap } from "@/components/ui/icons";

export function AboutSection() {
	const { t } = useTranslation();

	const skills = [
		{
			icon: Code2,
			title: t("about.skill1.title"),
			description: t("about.skill1.description"),
		},
		{
			icon: Layers,
			title: t("about.skill2.title"),
			description: t("about.skill2.description"),
		},
		{
			icon: Zap,
			title: t("about.skill3.title"),
			description: t("about.skill3.description"),
		},
		{
			icon: Users,
			title: t("about.skill4.title"),
			description: t("about.skill4.description"),
		},
	];

	return (
		<section
			id="about"
			className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
		>
			<div className="max-w-6xl mx-auto">
				<div className="animate-fade-in-up">
					<h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
						{t("about.title")}
					</h2>
					<h3 className="text-3xl sm:text-4xl font-bold mb-12">
						{t("about.subtitle")}
					</h3>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					<div className="space-y-6 text-lg leading-relaxed animate-fade-in-left delay-200">
						<p>
							{t("about.paragraph1").split(t("about.paragraph1.highlight"))[0]}
							<span className="text-foreground font-semibold">
								{t("about.paragraph1.highlight")}
							</span>
							{t("about.paragraph1").split(t("about.paragraph1.highlight"))[1]}
						</p>
						<p>
							{t("about.paragraph2").split(t("about.paragraph2.highlight"))[0]}
							<span className="text-foreground font-semibold">
								{t("about.paragraph2.highlight")}
							</span>
							{t("about.paragraph2").split(t("about.paragraph2.highlight"))[1]}
						</p>
					</div>

					<div className="space-y-6 text-lg leading-relaxed animate-fade-in-right delay-500">
						<p>
							{t("about.paragraph3").split(t("about.paragraph3.highlight1"))[0]}
							<span className="text-foreground font-semibold">
								{t("about.paragraph3.highlight1")}
							</span>
							{
								(
									t("about.paragraph3").split(
										t("about.paragraph3.highlight1"),
									)[1] || ""
								).split(t("about.paragraph3.highlight2"))[0]
							}
							<span className="text-foreground font-semibold">
								{t("about.paragraph3.highlight2")}
							</span>
							{t("about.paragraph3").split(t("about.paragraph3.highlight2"))[1]}
						</p>
						<p>{t("about.paragraph4")}</p>
					</div>
				</div>

				{/* Skills Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<div
							key={skill.title}
							className={`animate-fade-in-up delay-${600 + index * 100}`}
						>
							<Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105 hover:border-primary/50">
								<div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
									<skill.icon className="h-6 w-6 text-primary" />
								</div>
								<h4 className="font-semibold mb-2">{skill.title}</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{skill.description}
								</p>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
