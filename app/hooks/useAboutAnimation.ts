import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.from("#about-title", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
      .from("#about-desc", {
        y: 15,
        opacity: 0,
        duration: 0.6,
      }, "-=0.35")
      .from("#experience-wrapper", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
      }, "-=0.3")
      .from(".experience", {
        opacity: 0,
        duration: 0.4,
      }, "-=0.2")
      .from(".about-link", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      }, "-=0.2")
      .from("#about-picture", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4");
    }, elementRef);

    return () => ctx.revert();
  }, [elementRef]);
};
