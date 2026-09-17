import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

export const useCatalogAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.from("#catalog-watermark", {
        opacity: 0,
        y: -25,
        duration: 0.8,
      }, 0)
      .from("#catalog-back", {
        y: -15,
        opacity: 0,
        duration: 0.5,
      }, 0.1)
      .from("#catalog-title", {
        y: 25,
        opacity: 0,
        duration: 0.6,
      }, 0.2)
      .from("#catalog-desc", {
        y: 15,
        opacity: 0,
        duration: 0.6,
      }, 0.32)
      .from("#catalog-filters", {
        y: 15,
        opacity: 0,
        duration: 0.5,
      }, 0.42)
      .from(".project-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
      }, 0.48);
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
