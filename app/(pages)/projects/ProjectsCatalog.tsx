/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { Project } from '@/app/utils/types';

interface ProjectsCatalogProps {
  projects: Project[];
}

export default function ProjectsCatalog({ projects }: ProjectsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((p) => {
      if (p.category) unique.add(p.category);
    });
    return ['All', ...Array.from(unique)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="relative w-[90%] mx-auto pt-[110px] pb-[100px] lg:w-[1050px] lg:pt-[130px] lg:pb-[140px]">
      {/* Background Watermark */}
      <div className="hidden absolute top-12 -left-5 pointer-events-none lg:block lg:-left-24 lg:top-8 select-none">
        <p className="font-medium text-[90px] text-transparent bg-gradient-to-b from-[#A1A1A4]/30 lg:from-[#A1A1A4]/10 to-raisinBlack/1 to-80% bg-clip-text tracking-[-3%] lg:text-[200px]">
          Projects
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-start gap-8 w-full">
        {/* Back Link & Navigation */}
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
          <span>Back to Overview</span>
        </Link>

        {/* Header Title */}
        <div className="flex flex-col items-start justify-start gap-2">
          <h1 className="font-semibold text-[38px] text-white lg:text-[46px] leading-tight">
            All{' '}
            <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="font-medium text-sonicSilver text-sm lg:text-base max-w-[650px] leading-relaxed">
            A comprehensive showcase of web applications, enterprise systems, and interactive brand platforms I&apos;ve designed, built, and contributed to.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-crayolaGreen/15 text-crayolaGreen border-crayolaGreen/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                    : 'text-seashell/60 border-oliveBlack/70 hover:text-seashell hover:border-oliveBlack/90 bg-raisinBlack/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between w-full bg-raisinBlack/40 border-1 border-oliveBlack/70 border-dashed rounded-[12px] p-5 transition-all duration-300 hover:border-oliveBlack hover:bg-raisinBlack/70 group"
            >
              <div>
                {/* Image Container */}
                <div className="flex items-center justify-center w-full bg-raisinBlack bg-line-shape bg-no-repeat bg-cover rounded-[8px] p-4 h-[210px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[180px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start justify-start pt-5">
                  {project.category && (
                    <span className="text-[11px] font-medium text-crayolaGreen bg-crayolaGreen/10 border border-crayolaGreen/20 px-2.5 py-0.5 rounded-full mb-3.5">
                      {project.category}
                    </span>
                  )}
                  <h2 className="text-transparent font-bold text-2xl bg-gradient-to-b from-white to-[#999999] bg-clip-text mb-2">
                    {project.title}
                  </h2>
                  <p className="text-seashell/80 text-sm leading-6 mb-4">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Footer info & Button */}
              <div className="flex flex-col gap-4 pt-4 border-t border-oliveBlack/40 border-dashed mt-auto">
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-semibold text-seashell/90">Tech Stack</span>
                  <span className="text-seashell/60 leading-5">{project.tech}</span>
                </div>
                <div className="flex items-center justify-end pt-2">
                  <Button type="link" href={project.url} variant="basic" className="!w-[130px] !h-[38px]">
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="flex items-center justify-center w-full pt-10">
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
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
