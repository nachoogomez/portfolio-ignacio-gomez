import * as React from "react";

interface UseIsInViewOptions {
	inView?: boolean;
	inViewOnce?: boolean;
	inViewMargin?: string;
}

function useIsInView<T extends HTMLElement = HTMLElement>(
	ref: React.Ref<T>,
	options: UseIsInViewOptions = {},
) {
	const { inView, inViewOnce = false, inViewMargin = "0px" } = options;
	const localRef = React.useRef<T>(null);
	const [isInViewState, setIsInViewState] = React.useState(false);

	React.useImperativeHandle(ref, () => localRef.current as T);

	React.useEffect(() => {
		const element = localRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry && entry.isIntersecting) {
					setIsInViewState(true);
					if (inViewOnce) {
						observer.disconnect();
					}
				} else if (!inViewOnce) {
					setIsInViewState(false);
				}
			},
			{
				rootMargin: inViewMargin,
			},
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [inViewOnce, inViewMargin]);

	const isInView = !inView || isInViewState;
	return { ref: localRef, isInView };
}

export { useIsInView, type UseIsInViewOptions };
