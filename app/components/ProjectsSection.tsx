/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef } from 'react';
import { useSectionStore } from '../store/sectionStore';
import { useProjectsAnimation } from '../hooks/useProjectsAnimation';
import Button from './ui/Button';
import { Project } from '../utils/types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection ({ projects }: ProjectsSectionProps) {
  const projectsRef = useRef<HTMLElement | null>(null);
  const setSectionRef = useSectionStore((state) => state.setSectionRef);

  useProjectsAnimation(projectsRef);
  
  useEffect(() => {
    if (projectsRef.current) {
      setSectionRef("projects", projectsRef.current);
    }
  }, [setSectionRef]);

  return (
    <section ref={projectsRef} id="featured-projects">
      <div className="relative w-[90%] mx-auto mt-[50px] lg:w-[1050px] lg:mt-[100px]">
        <div id='projects-gradient' className='hidden absolute -top-14 -left-5 lg:block lg:-left-32 lg:-top-32'>
          <p className="font-medium text-[90px] mobile-md:text-[100px] text-transparent bg-gradient-to-b from-[#A1A1A4]/50 lg:from-[#A1A1A4]/10 to-raisinBlack/1 to-80% bg-clip-text tracking-[-3%] lg:text-[200px]">
            Projects
          </p>
        </div>
        <div className='relative flex flex-col items-start justify-start gap-10 w-full mx-auto z-10 lg:gap-[43px] lg:w-[90%]'>
          <div className='flex flex-col items-start justify-start'>
            <h1 className="font-semibold mobile-sm:text-[36px] text-white lg:text-[42px]">
              Featured {' '}
              <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
                Projects
              </span>
            </h1>
            <p className='font-medium text-sonicSilver text-sm mt-1 lg:text-base lg:mt-0'>
              A glimpse into the projects I&apos;ve built and contributed to along the way.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-[30px] w-full'>
            {projects.slice(0, 3).map((project) => {
              const techList = Array.isArray(project.tech)
                ? project.tech
                : project.tech.split('·').map((t) => t.trim());

              return ( 
                <div key={project.id} className="flex flex-col items-center justify-center gap-5 w-full lg:flex-row lg:items-stretch">
                  <div className={`${project.id % 2 === 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'} flex items-center justify-center w-full bg-raisinBlack bg-line-shape bg-no-repeat bg-cover rounded-[10px] p-4 lg:w-[305px] lg:min-h-[340px] lg:p-0`}>
                    <img src={project.image} alt={project.title} className='w-full lg:w-[285px] lg:h-[210px] object-contain' />
                  </div>
                  <div className={`${project.id % 2 === 0 ? 'order-1' : 'order-2'} flex flex-col items-start justify-between w-full text-white border-1 border-oliveBlack/70 border-dashed rounded-[10px] p-5 lg:w-[630px] lg:min-h-[340px]`}>
                    <div>
                      <h2 className='text-transparent font-bold text-3xl bg-gradient-to-b from-white to-[#999999] bg-clip-text mb-3 lg:mb-[10px]'>{project.title}</h2>
                      <p className='text-seashell text-sm leading-5 mb-4 lg:leading-6'>{project.desc}</p>
                    </div>
                    <div className='flex flex-col gap-2.5 w-full my-3'>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-crayolaGreen/70"></span>
                        <p className='font-semibold text-xs uppercase tracking-wider text-seashell'>Tech Stack</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {techList.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-raisinBlack border border-oliveBlack/80 text-seashell/80 hover:text-white hover:border-crayolaGreen/40 transition-colors duration-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex items-center justify-start lg:justify-end w-full mt-2 lg:mt-6'>
                      {/* Mobile: Minimalist text link with arrow */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex lg:hidden items-center gap-1.5 text-sm font-medium text-seashell hover:text-crayolaGreen transition-colors duration-200 group py-1 mt-2"
                      >
                        <span className="underline underline-offset-4 decoration-crayolaGreen/60 group-hover:decoration-crayolaGreen">Visit Website</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-crayolaGreen"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      {/* Desktop: Standard Button */}
                      <div className="hidden lg:block">
                        <Button type='link' href={project.url} variant='basic'>Visit Website</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            
            <div className='flex justify-center w-full mt-4 lg:mt-6'>
              <Button 
                type='link'
                href='/projects' 
                variant='highlight'
                className='!w-[180px] lg:!w-[160px]'
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}