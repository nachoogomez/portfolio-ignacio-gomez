"use client";

import {
	motion,
	type SpringOptions,
	useSpring,
	useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
	className?: string;
	size?: number;
	springOptions?: SpringOptions;
}

export function Spotlight({
	className = "",
	size = 200,
	springOptions = { bounce: 0 },
}: SpotlightProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const mouseX = useSpring(0, springOptions);
	const mouseY = useSpring(0, springOptions);

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			const container = containerRef.current;
			if (!container) {
				return;
			}
			const parent = container.parentElement;
			if (!parent) {
				return;
			}
			const rect = parent.getBoundingClientRect();
			mouseX.set(event.clientX - rect.left);
			mouseY.set(event.clientY - rect.top);
		},
		[mouseX, mouseY],
	);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) {
			return;
		}

		const parent = container.parentElement;
		if (!parent) {
			return;
		}

		const handleMouseEnter = () => setIsHovered(true);
		const handleMouseLeave = () => setIsHovered(false);

		// Attach events to parent instead of container
		parent.addEventListener("mouseenter", handleMouseEnter);
		parent.addEventListener("mouseleave", handleMouseLeave);
		parent.addEventListener("mousemove", handleMouseMove);

		// Set parent to relative positioning with overflow hidden
		parent.style.position = "relative";
		parent.style.overflow = "hidden";

		return () => {
			parent.removeEventListener("mouseenter", handleMouseEnter);
			parent.removeEventListener("mouseleave", handleMouseLeave);
			parent.removeEventListener("mousemove", handleMouseMove);
		};
	}, [handleMouseMove]);

	const left = useTransform(mouseX, (x) => `${x - size / 2}px`);
	const top = useTransform(mouseY, (y) => `${y - size / 2}px`);

	return (
		<div ref={containerRef} className="pointer-events-none absolute inset-0">
			<motion.div
				className={cn("pointer-events-none absolute rounded-full", className)}
				style={{
					left,
					top,
					width: `${size}px`,
					height: `${size}px`,
					opacity: isHovered ? 1 : 0,
				}}
				transition={{ opacity: { duration: 0.2 } }}
			/>
		</div>
	);
}
