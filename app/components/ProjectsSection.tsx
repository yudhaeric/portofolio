/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef, useState } from 'react';
import { useSectionStore } from '../store/sectionStore';
import { useProjectsAnimation } from '../hooks/useProjectsAnimation';
import Button from './ui/Button';
import { Project } from '../utils/types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection ({ projects }: ProjectsSectionProps) {
  const projectsRef = useRef<HTMLElement | null>(null);
  const setSectionRef = useSectionStore((state) => state.setSectionRef);
  const [isExpanded, setIsExpanded] = useState(false);

  useProjectsAnimation(projectsRef);
  
  useEffect(() => {
    if (projectsRef.current) {
      setSectionRef("projects", projectsRef.current);
    }
  }, [setSectionRef]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isExpanded]);

  return (
    <section ref={projectsRef} id="featured-projects">
      <div className="relative w-[90%] mx-auto mt-[70px] lg:w-[1050px] lg:mt-[100px]">
        <div id='projects-gradient' className='hidden absolute -top-14 -left-5 lg:block lg:-left-32 lg:-top-32'>
          <p className="font-medium text-[90px] mobile-md:text-[100px] text-transparent bg-gradient-to-b from-[#A1A1A4]/50 lg:from-[#A1A1A4]/10 to-raisinBlack/1 to-80% bg-clip-text tracking-[-3%] lg:text-[200px]">
            Projects
          </p>
        </div>
        <div className='relative flex flex-col items-start justify-start gap-10 w-full mx-auto z-10 lg:gap-[43px] lg:w-[90%]'>
          <div className='flex flex-col items-start justify-start'>
            <h1 className="font-semibold text-[40px] text-white lg:text-[42px]">
              Featured{' '}
              <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
                Projects
              </span>
            </h1>
            <p className='font-medium text-sonicSilver text-sm lg:text-base'>
              A glimpse into the projects I&apos;ve built and contributed to.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-[30px] w-full'>
            {(isExpanded ? projects : projects.slice(0, 3)).map((project, index) => {
              return ( 
                <div key={project.id} className={`flex flex-col items-center justify-center gap-5 w-full lg:flex-row ${index >= 3 ? 'animate-fade-in-up' : ''}`}>
                  <div className={`${project.id % 2 === 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'} flex items-center justify-center w-full bg-raisinBlack bg-line-shape bg-no-repeat bg-cover rounded-[10px] p-4 lg:w-[305px] lg:h-[340px] lg:p-0`}>
                    <img src={project.image} alt={project.title} className='w-full lg:w-[285px] lg:h-[210px]' />
                  </div>
                  <div className={`${project.id % 2 === 0 ? 'order-1' : 'order-2'} flex flex-col items-start justify-start w-full text-white border-1 border-oliveBlack/70 border-dashed rounded-[10px] p-5 lg:w-[630px] lg:h-[340px]`}>
                    <h2 className='text-transparent font-bold text-3xl bg-gradient-to-b from-white to-[#999999] bg-clip-text mb-3 lg:mb-[10px]'>{project.title}</h2>
                    <p className='text-seashell text-sm leading-5 mb-[30px] lg:leading-6'>{project.desc}</p>
                    <div className='flex flex-col gap-1 text-sm leading-5 lg:leading-6'>
                      <p className='font-semibold text-seashell'>Tech Stack</p>
                      <p className='text-seashell text-sm'>{project.tech}</p>
                    </div>
                    <div className='flex items-end justify-end w-full h-[28px] mt-10 lg:mt-5'>
                      <Button type='link' href={project.url} variant='basic'>Visit Website</Button>
                    </div>
                  </div>
                </div>
              )
            })}
            
            {projects.length > 3 && (
              <div className='flex justify-center w-full mt-4 lg:mt-6'>
                <Button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  variant='highlight'
                  className='!w-[180px] lg:!w-[160px]'
                >
                  {isExpanded ? 'Show Less' : 'Explore Projects'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}