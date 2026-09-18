import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

export const useCatalogAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.fromTo(
        "#catalog-watermark",
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: "transform,opacity" },
        0
      )
      .fromTo(
        "#catalog-back",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" },
        0.1
      )
      .fromTo(
        "#catalog-title",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "transform,opacity" },
        0.2
      )
      .fromTo(
        "#catalog-desc",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "transform,opacity" },
        0.32
      )
      .fromTo(
        "#catalog-filters",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" },
        0.42
      )
      .fromTo(
        ".project-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          clearProps: "transform,opacity",
        },
        0.48
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
