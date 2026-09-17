/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { Project } from '@/app/utils/types';
import { useCatalogAnimation } from '@/app/hooks/useCatalogAnimation';

interface ProjectsCatalogProps {
  projects: Project[];
}

export default function ProjectsCatalog({ projects }: ProjectsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const catalogRef = useRef<HTMLDivElement | null>(null);

  useCatalogAnimation(catalogRef);

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

  useEffect(() => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    });
  }, [filteredProjects]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={catalogRef} className="relative w-[90%] mx-auto pt-[90px] pb-[40px] lg:w-[1050px] lg:pt-[130px] lg:pb-[50px]">
      {/* Background Watermark */}
      <div id="catalog-watermark" className="hidden absolute top-12 -left-5 pointer-events-none lg:block lg:-left-24 lg:top-8 select-none">
        <p className="font-medium text-[90px] text-transparent bg-gradient-to-b from-[#A1A1A4]/30 lg:from-[#A1A1A4]/10 to-raisinBlack/1 to-80% bg-clip-text tracking-[-3%] lg:text-[200px]">
          Projects
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-start gap-2 lg:gap-6 w-full">
        {/* Back Link & Navigation */}
        <div id="catalog-back">
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

        {/* Header Title */}
        <div className="flex flex-col items-start justify-start gap-2">
          <h1 id="catalog-title" className="font-semibold text-[38px] text-white lg:text-[46px] leading-tight">
            Curated{' '}
            <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
              Projects
            </span>
          </h1>
          <p id="catalog-desc" className="font-medium text-sonicSilver text-sm lg:text-base max-w-[650px] leading-relaxed">
            A comprehensive showcase of web applications, enterprise systems, and interactive brand platforms I&apos;ve designed, built, and contributed to.
          </p>
        </div>

        {/* Category Filters */}
        <div id="catalog-filters" className="w-full">
          {/* Category Filters: Mobile Dropdown (< sm) */}
          <div className="relative w-full sm:hidden my-3" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-expanded={isDropdownOpen}
            aria-label="Filter category"
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-[10px] bg-raisinBlack/80 border border-oliveBlack/80 text-xs font-medium text-seashell shadow-md cursor-pointer transition-all duration-200 hover:border-oliveBlack"
          >
            <div className="flex items-center gap-2">
              <span className="text-sonicSilver text-[11px] uppercase tracking-wider mt-[1px]">Category:</span>
              <span className="text-white font-medium">
                {selectedCategory === 'All' ? 'All Projects' : selectedCategory}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-4 h-4 transition-transform duration-200 text-sonicSilver ${
                isDropdownOpen ? 'rotate-180 text-crayolaGreen' : ''
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Mobile Dropdown Menu Card */}
          {isDropdownOpen && (
            <div 
              className="absolute top-[calc(100%+6px)] left-0 right-0 w-full bg-[#131415] border border-oliveBlack/80 rounded-[10px] shadow-2xl p-1.5 z-50 flex flex-col gap-1 backdrop-blur-none"
              role="menu"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="menuitem"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-[6px] text-xs font-medium transition-colors duration-200 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-raisinBlack text-crayolaGreen font-semibold'
                        : 'text-seashell/80 hover:text-white hover:bg-raisinBlack/60'
                    }`}
                  >
                    <span>{cat === 'All' ? 'All Projects' : cat}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-crayolaGreen" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Category Filters: Desktop & Tablet Pills (sm:) */}
        <div className="hidden sm:flex flex-wrap items-center gap-2 pb-1">
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
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card flex flex-col justify-between w-full bg-raisinBlack/40 border-1 border-oliveBlack/70 border-dashed rounded-[12px] p-5 transition-all duration-300 hover:border-oliveBlack hover:bg-raisinBlack/70 group"
          >
              <div>
                {/* Image Container */}
                <div className="flex items-center justify-center w-full bg-raisinBlack bg-line-shape bg-no-repeat bg-cover rounded-[8px] p-4 h-[250px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[180px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start justify-start pt-5">
                  {project.category && (
                    <span className="text-xs font-medium text-crayolaGreen bg-crayolaGreen/10 border border-crayolaGreen/20 px-2.5 py-0.5 rounded-full mb-3.5">
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
                  <Button type="link" href={project.url} variant="basic">
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
            <span>Return to Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
