import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useContactAnimation = (elementRef: RefObject<HTMLElement | null>, dependency?: unknown) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    // On non-home pages (e.g. /projects), the footer is a standard page footer.
    // Ensure it remains permanently visible, avoiding issues when filtered content is short.
    const isHomePage = typeof dependency === 'string' ? dependency === '/' : true;

    if (!isHomePage) {
      gsap.set(elementRef.current, {
        y: 0,
        opacity: 1,
        clearProps: "all",
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 88%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, elementRef);

    // Ensure ScrollTrigger measures accurate document height after render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [elementRef, dependency]);
};
