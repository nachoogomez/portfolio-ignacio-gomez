import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	className?: string;
};

/**
 * Single construction for every section header on the page.
 * Keeps the heading level at h2 so the document outline stays h1 → h2 → h3.
 */
export function SectionHeading({
	eyebrow,
	title,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn("mb-10", className)}>
			<p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
				{eyebrow}
			</p>
			<h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-balance">
				{title}
			</h2>
		</div>
	);
}
