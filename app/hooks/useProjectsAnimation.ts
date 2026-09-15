import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useProjectsAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#featured-projects", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
    }, elementRef);

    return () => ctx.revert();
  }, [elementRef]);
};
