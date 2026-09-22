/* eslint-disable @next/next/no-img-element */
'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { useAboutPageAnimation } from '@/app/hooks/useAboutPageAnimation';
import {
  bioData,
  experiences,
  educationList,
  courseList,
  skillCategories,
} from '@/app/data/about';

export default function AboutView() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useAboutPageAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative w-[90%] mx-auto pt-[90px] pb-[60px] lg:w-[1050px] lg:pt-[130px] lg:pb-[90px]"
    >
      {/* Background Watermark */}
      <div
        id="about-watermark"
        className="hidden absolute top-12 -left-5 pointer-events-none lg:block lg:-left-24 lg:top-8 select-none"
      >
        <p className="font-medium text-[90px] text-transparent bg-gradient-to-b from-[#A1A1A4]/30 lg:from-[#A1A1A4]/10 to-raisinBlack/1 to-80% bg-clip-text tracking-[-3%] lg:text-[200px]">
          About Me
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-start gap-12 lg:gap-16 w-full">
        {/* Navigation & Header */}
        <div className="flex flex-col items-start justify-start gap-3 lg:gap-6 w-full">
          {/* Back Link */}
          <div id="about-back">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-sonicSilver hover:text-seashell transition-colors duration-200 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Return to Overview</span>
            </Link>
          </div>

          {/* Title and Intro */}
          <div id="about-header" className="flex flex-col items-start justify-start gap-2 max-w-[850px]">
            <h1 className="font-semibold text-[38px] text-white lg:text-[48px] leading-tight">
              About{' '}
              <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
                Me
              </span>
            </h1>
            <p className="font-medium text-sonicSilver text-sm lg:text-base leading-relaxed">
              {bioData.headline}
            </p>
          </div>
        </div>

        {/* SECTION 1: Tentang Ku / Narrative Bio */}
        <section id="about-section-bio" className="about-section w-full flex flex-col gap-6">
          <div className="about-section-header flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-crayolaGreen"></span>
            <h2 className="text-xs uppercase tracking-widest text-crayolaGreen font-semibold">
              Background & Story
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
            {/* Left Column: Avatar & Quick Info Card */}
            <div className="about-bio-card lg:col-span-4 flex flex-col gap-4">
              <div className="w-full bg-raisinBlack/40 border border-oliveBlack/70 border-dashed rounded-[12px] p-5 flex flex-col items-center text-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-crayolaGreen/40 p-1 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <img
                    src="/images/pictures.png"
                    alt="Yudha Eric Pamungkas"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-lg text-white">Yudha Eric Pamungkas</h3>
                <p className="text-xs text-crayolaGreen font-medium mt-0.5">Frontend Engineer</p>

                <div className="w-full h-[1px] bg-oliveBlack/60 border-dashed my-4"></div>

                <div className="flex items-center justify-center gap-3 w-full">
                  <Button
                    type="link"
                    href="mailto:yudhaericpamungkas@gmail.com"
                    variant="basic"
                    className="!w-full !h-[36px] text-xs"
                  >
                    Reach Me
                  </Button>
                  <Button
                    type="link"
                    href="https://drive.google.com/file/d/1-Jiw5CyA9SzDEL2IWx3qQz-rW9eQOwZ1/view?usp=sharing"
                    variant="basic"
                    className="!w-full !h-[36px] text-xs"
                  >
                    Resume
                  </Button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {bioData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-raisinBlack/30 border border-oliveBlack/60 rounded-[10px] p-3.5 flex flex-col gap-1"
                  >
                    <span className="text-[11px] text-sonicSilver uppercase tracking-wider">{stat.label}</span>
                    <span className="text-xs lg:text-sm font-semibold text-seashell">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Bio Narrative Paragraphs */}
            <div className="about-bio-text lg:col-span-8 flex flex-col gap-4 text-seashell/80 text-sm lg:text-base leading-relaxed bg-raisinBlack/20 border border-oliveBlack/50 rounded-[12px] p-6 lg:p-8">
              {bioData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Work Experience */}
        <section id="about-section-experience" className="about-section w-full flex flex-col gap-6">
          <div className="about-section-header flex items-center justify-between border-b border-oliveBlack/60 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-crayolaGreen"></span>
              <h2 className="text-xs uppercase tracking-widest text-crayolaGreen font-semibold">
                Work Experience
              </h2>
            </div>
            <span className="text-xs text-sonicSilver">4 Years in Industry</span>
          </div>

          <div className="relative pl-6 lg:pl-8 border-l border-oliveBlack/70 border-dashed ml-3 lg:ml-4 flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="about-experience-item relative flex flex-col gap-3 group">
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[31px] lg:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-raisinBlack border-2 border-crayolaGreen shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-transform duration-300 group-hover:scale-125" />

                {/* Role Header & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-crayolaGreen transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-medium text-seashell/90">{exp.company}</span>
                      <span className="text-sonicSilver">•</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-raisinBlack border border-oliveBlack text-sonicSilver">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-sonicSilver/90 bg-raisinBlack/60 border border-oliveBlack/70 px-3 py-1 rounded-full w-fit sm:w-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-2 mt-2">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs lg:text-sm text-seashell/75 leading-relaxed">
                      <span className="text-crayolaGreen mt-1 text-base leading-none">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-raisinBlack/80 border border-oliveBlack/60 text-seashell/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Education */}
        <section id="about-section-education" className="about-section w-full flex flex-col gap-6">
          <div className="about-section-header flex items-center gap-3 border-b border-oliveBlack/60 pb-3">
            <span className="w-2 h-2 rounded-full bg-crayolaGreen"></span>
            <h2 className="text-xs uppercase tracking-widest text-crayolaGreen font-semibold">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="about-education-item flex flex-col justify-between bg-raisinBlack/40 border border-oliveBlack/70 border-dashed rounded-[12px] p-6 hover:border-oliveBlack hover:bg-raisinBlack/60 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-base lg:text-lg text-white">
                      {edu.institution}
                    </h3>
                    {edu.gpa && (
                      <span className="text-[11px] font-semibold text-crayolaGreen bg-crayolaGreen/10 border border-crayolaGreen/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                  <p className="text-xs lg:text-sm text-seashell/90 font-medium mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-sonicSilver mb-3">
                    {edu.period}
                  </p>
                  <p className="text-xs lg:text-sm text-seashell/70 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Courses & Certifications */}
        <section id="about-section-courses" className="about-section w-full flex flex-col gap-6">
          <div className="about-section-header flex items-center gap-3 border-b border-oliveBlack/60 pb-3">
            <span className="w-2 h-2 rounded-full bg-crayolaGreen"></span>
            <h2 className="text-xs uppercase tracking-widest text-crayolaGreen font-semibold">
              Courses & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
            {courseList.map((course) => (
              <div
                key={course.id}
                className="about-course-item bg-raisinBlack/30 border border-oliveBlack/60 rounded-[10px] p-4 flex flex-col justify-between gap-3 hover:border-crayolaGreen/40 hover:bg-raisinBlack/50 transition-all duration-200 group"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-crayolaGreen/90">
                    {course.provider}
                  </span>
                  <h4 className="font-semibold text-xs lg:text-sm text-white group-hover:text-seashell mt-1 leading-snug">
                    {course.title}
                  </h4>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-[11px] text-sonicSilver font-medium">
                    {course.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Skills & Tech Stack */}
        <section id="about-section-skills" className="about-section w-full flex flex-col gap-6">
          <div className="about-section-header flex items-center gap-3 border-b border-oliveBlack/60 pb-3">
            <span className="w-2 h-2 rounded-full bg-crayolaGreen"></span>
            <h2 className="text-xs uppercase tracking-widest text-crayolaGreen font-semibold">
              Skills & Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="about-skill-item bg-raisinBlack/40 border border-oliveBlack/70 border-dashed rounded-[12px] p-5 flex flex-col gap-3.5 hover:border-oliveBlack transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crayolaGreen/70"></span>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-seashell">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-raisinBlack border border-oliveBlack/80 text-seashell/80 hover:text-white hover:border-crayolaGreen/40 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA / Navigation */}
        <div id="about-section-cta" className="about-section w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-oliveBlack/60 border-dashed mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sonicSilver hover:text-crayolaGreen transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Return to Overview</span>
          </Link>

          <Button type="link" href="/projects" variant="basic">
            Explore Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
