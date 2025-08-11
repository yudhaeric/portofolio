import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    gsap.from("#experience-wrapper", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.7,
      delay: 1.5,
      ease: "power2.out"
    });

    const fadeinAnimation = gsap.timeline();

    fadeinAnimation
      .from("#about-title", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      })
      .from("#about-desc", {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power2.out"
      }, "<")
      .from(".experience", {
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power2.out"
      })

    gsap.from(".about-link", {
      y: 20,
      opacity: 0,
      delay: 2.6,
      duration: 1,
      ease: "power2.out"
    });
    
    gsap.from("#about-picture", {
      y: 20,
      opacity: 0,
      delay: 3.1,
      duration: 1,
      ease: "power2.out",
    });

  }, [elementRef]);
};
