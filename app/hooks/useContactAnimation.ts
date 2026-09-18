import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useContactAnimation = (elementRef: RefObject<HTMLElement | null>, dependency?: unknown) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const isHomePage = typeof dependency === 'string' ? dependency === '/' : true;

    const ctx = gsap.context(() => {
      if (isHomePage) {
        // Home page has bidirectional scroll animation
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
      } else {
        // Non-home pages (e.g. /projects): entrance animation that stays visible
        gsap.fromTo(
          elementRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: elementRef.current,
              start: "top 98%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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
