import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useContactAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const contactAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: "30% 95%",
        toggleActions: "play reverse play reverse",
        // markers: true,
      }
    });

    contactAnimation.from("#get-in-touch", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    const animations = [
      { selector: "#email-contact", start: "top 100%", end: "bottom 20%" },
      { selector: "#linkedin-contact", start: "top 95%", end: "bottom 20%" },
      { selector: "#github-contact", start: "top 95%", end: "bottom 20%" },
    ];

    animations.forEach(({ selector, start, end }) => {
      const el = elementRef.current?.querySelector(selector);
      if (!el) return;

      el.classList.add("underline-animation");

      gsap.to(el, {
        delay: 1,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: "restart none reverse none",
          toggleClass: { targets: el, className: "underline-animation-active" },
          // markers: true,
        },
      });
    });
  }, [elementRef]);
};
