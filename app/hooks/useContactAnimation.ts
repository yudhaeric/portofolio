import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useContactAnimation = (elementRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!elementRef.current) return;

    const animations = [
      { selector: "#email-contact", start: "top 95%", end: "bottom 20%" },
      { selector: "#linkedin-contact", start: "top 90%", end: "bottom 25%" },
      { selector: "#github-contact", start: "top 90%", end: "bottom 25%" },
    ];

    animations.forEach(({ selector, start, end }) => {
      const el = elementRef.current?.querySelector(selector);
      if (!el) return;

      el.classList.add("underline-animation");

      gsap.to(el, {
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
