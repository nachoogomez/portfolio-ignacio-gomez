import { Trans, useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Code2, Layers, Users, Zap } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const SKILL_CARDS = [
	{ id: "skill1", icon: Code2 },
	{ id: "skill2", icon: Layers },
	{ id: "skill3", icon: Zap },
	{ id: "skill4", icon: Users },
] as const;

const HIGHLIGHT = {
	strong: <strong className="font-semibold text-foreground" />,
};

export function AboutSection() {
	const { t } = useTranslation();

	return (
		<section
			id="about"
			className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
		>
			<div className="max-w-6xl mx-auto">
				<SectionHeading
					eyebrow={t("about.title")}
					title={t("about.subtitle")}
					className="animate-fade-in-up mb-12"
				/>

				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					<div className="space-y-6 text-lg leading-relaxed text-pretty animate-fade-in-left delay-200">
						<p>
							<Trans i18nKey="about.paragraph1" components={HIGHLIGHT} />
						</p>
						<p>
							<Trans i18nKey="about.paragraph2" components={HIGHLIGHT} />
						</p>
					</div>

					<div className="space-y-6 text-lg leading-relaxed text-pretty animate-fade-in-right delay-500">
						<p>
							<Trans i18nKey="about.paragraph3" components={HIGHLIGHT} />
						</p>
						<p>{t("about.paragraph4")}</p>
					</div>
				</div>

				{/* Skills Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{SKILL_CARDS.map((skill, index) => (
						<div
							key={skill.id}
							className="animate-fade-in-up"
							style={{ animationDelay: `${600 + index * 100}ms` }}
						>
							<Card className="p-6 h-full">
								<div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
									<skill.icon
										className="h-6 w-6 text-primary"
										aria-hidden="true"
									/>
								</div>
								<h3 className="font-semibold mb-2">
									{t(`about.${skill.id}.title`)}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed text-pretty">
									{t(`about.${skill.id}.description`)}
								</p>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
