import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useProjectsAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const projectsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
        // markers: true,
      }
    });

    projectsAnimation.from("#featured-projects", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [elementRef]);
};
