import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutPageAnimation = (containerRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial Page Load Entrance (Watermark, Back Button, Main Title & Intro)
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.fromTo(
        "#about-watermark",
        { opacity: 0, y: -25 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: "transform,opacity" },
        0
      )
      .fromTo(
        "#about-back",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" },
        0.1
      )
      .fromTo(
        "#about-header",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "transform,opacity" },
        0.2
      );

      // 2. Section 1: Background & Story (Avatar card and bio narrative)
      const bioSection = containerRef.current?.querySelector("#about-section-bio");
      if (bioSection) {
        const bioHeader = bioSection.querySelector(".about-section-header");
        const bioCard = bioSection.querySelector(".about-bio-card");
        const bioText = bioSection.querySelector(".about-bio-text");

        const bioTl = gsap.timeline({
          scrollTrigger: {
            trigger: bioSection,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power2.out" },
        });

        if (bioHeader) {
          bioTl.fromTo(
            bioHeader,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" }
          );
        }

        if (bioCard && bioText) {
          bioTl.fromTo(
            [bioCard, bioText],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }
      }

      // 3. Section 2: Work Experience (Header and Timeline items)
      const expSection = containerRef.current?.querySelector("#about-section-experience");
      if (expSection) {
        const expHeader = expSection.querySelector(".about-section-header");
        const expItems = expSection.querySelectorAll(".about-experience-item");

        const expTl = gsap.timeline({
          scrollTrigger: {
            trigger: expSection,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power2.out" },
        });

        if (expHeader) {
          expTl.fromTo(
            expHeader,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" }
          );
        }

        if (expItems.length > 0) {
          expTl.fromTo(
            expItems,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }
      }

      // 4. Section 3: Education (Header and Education cards)
      const eduSection = containerRef.current?.querySelector("#about-section-education");
      if (eduSection) {
        const eduHeader = eduSection.querySelector(".about-section-header");
        const eduItems = eduSection.querySelectorAll(".about-education-item");

        const eduTl = gsap.timeline({
          scrollTrigger: {
            trigger: eduSection,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power2.out" },
        });

        if (eduHeader) {
          eduTl.fromTo(
            eduHeader,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" }
          );
        }

        if (eduItems.length > 0) {
          eduTl.fromTo(
            eduItems,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }
      }

      // 5. Section 4: Courses & Certifications (Header and Course cards)
      const courseSection = containerRef.current?.querySelector("#about-section-courses");
      if (courseSection) {
        const courseHeader = courseSection.querySelector(".about-section-header");
        const courseItems = courseSection.querySelectorAll(".about-course-item");

        const courseTl = gsap.timeline({
          scrollTrigger: {
            trigger: courseSection,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power2.out" },
        });

        if (courseHeader) {
          courseTl.fromTo(
            courseHeader,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" }
          );
        }

        if (courseItems.length > 0) {
          courseTl.fromTo(
            courseItems,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }
      }

      // 6. Section 5: Skills & Tech Stack (Header and Skill categories)
      const skillSection = containerRef.current?.querySelector("#about-section-skills");
      if (skillSection) {
        const skillHeader = skillSection.querySelector(".about-section-header");
        const skillItems = skillSection.querySelectorAll(".about-skill-item");

        const skillTl = gsap.timeline({
          scrollTrigger: {
            trigger: skillSection,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power2.out" },
        });

        if (skillHeader) {
          skillTl.fromTo(
            skillHeader,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, clearProps: "transform,opacity" }
          );
        }

        if (skillItems.length > 0) {
          skillTl.fromTo(
            skillItems,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
            "-=0.2"
          );
        }
      }

      // 7. Section 6: Bottom CTA / Return
      const ctaSection = containerRef.current?.querySelector("#about-section-cta");
      if (ctaSection) {
        gsap.fromTo(
          ctaSection,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ctaSection,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [containerRef]);
};
