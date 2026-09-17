/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef, useState } from 'react';
import { useSectionStore } from '../store/sectionStore';
import { useAboutAnimation } from '../hooks/useAboutAnimation';
import Button from './ui/Button';
import { SocialMedia } from '../utils/types';
import { socialMedias as defaultSocialMedias } from '../data/socialMedias';

interface AboutSectionProps {
  socialMedias?: SocialMedia[];
}

const beamHorizontalStyle = {
  background: 'linear-gradient(90deg, transparent 0%, rgba(156, 163, 175, 0.4) 35%, rgba(243, 244, 246, 0.75) 50%, rgba(156, 163, 175, 0.4) 65%, transparent 100%)',
  filter: 'drop-shadow(0 0 3px rgba(229, 231, 235, 0.3))',
};

const beamVerticalStyle = {
  background: 'linear-gradient(180deg, transparent 0%, rgba(156, 163, 175, 0.4) 35%, rgba(243, 244, 246, 0.75) 50%, rgba(156, 163, 175, 0.4) 65%, transparent 100%)',
  filter: 'drop-shadow(0 0 3px rgba(229, 231, 235, 0.3))',
};

export default function AboutSection ({ socialMedias = defaultSocialMedias }: AboutSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const aboutRef = useRef<HTMLElement | null>(null);
  const setSectionRef = useSectionStore((state) => state.setSectionRef);

  useAboutAnimation(aboutRef);
  
  useEffect(() => {
    setIsMounted(true);
    if (aboutRef.current) {
      setSectionRef("about", aboutRef.current);
    }
  }, [setSectionRef]);

  const sectionRefs = useSectionStore((state) => state.sectionRefs);

  const handleClickProjectsSection = (section: string) => {
    const ref = sectionRefs[section];
    if (ref) {
      const offset = 120;
      const elementPosition = ref.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={aboutRef} id="about" className="lg:min-h-screen lg:flex lg:items-center lg:justify-center w-full">
      <div className="flex items-start justify-start w-full mt-[60px] lg:items-start lg:justify-start lg:w-[1050px] lg:mx-auto lg:h-[500px] lg:mt-0 dmd:mt-0 lg:-translate-y-8">
        <div id='outer-left-grid'>
          <div className='hidden lg:flex flex-col items-center justify-center w-[40px] dmd:w-[60px] h-[85.5px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:mt-[40px] dmd:h-[85px] 2xl:mt-[39px]'></div>
          <div className='hidden lg:flex flex-col items-center justify-center w-[40px] dmd:w-[60px] h-[200px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed'></div>
          <div className='hidden lg:flex flex-col items-center justify-center w-[40px] dmd:w-[60px] h-[134.5px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed dmd:h-[135px] 2xl:h-[137px]'></div>
        </div>
        <div className='flex flex-col items-center justify-center gap-[1px] w-full h-full lg:flex-row lg:justify-between'>
          <div id='top-grid-mobile' className="w-[90%] h-[40px] dmd:h-[60px] border-l-1 border-r-1 border-oliveBlack/70 border-dashed lg:hidden"></div>
          {/* Summary */}
          <div className='relative flex flex-col items-center justify-center w-full lg:w-[60%]'>
            {/* Border Left & Right Dashed with Gradient Mask */}
            <div 
              className='hidden lg:block absolute inset-0 border-l-1 border-r-1 border-dashed border-oliveBlack pointer-events-none'
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)',
              }}
            />
            {/* Vertical Running Grid Beam (Left Line) */}
            <div className='hidden lg:block absolute top-0 -left-[0.5px] w-[1px] h-full overflow-hidden pointer-events-none z-10'>
              <div 
                className={`${isMounted ? 'grid-beam-v beam-delay-v-left' : 'opacity-0'} w-full h-[150px]`} 
                style={beamVerticalStyle}
              />
            </div>
            {/* Vertical Running Grid Beam (Right Divider Line) */}
            <div className='hidden lg:block absolute top-0 -right-[0.5px] w-[1px] h-full overflow-hidden pointer-events-none z-10'>
              <div 
                className={`${isMounted ? 'grid-beam-v beam-delay-v-mid' : 'opacity-0'} w-full h-[150px]`} 
                style={beamVerticalStyle}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className='w-full lg:w-full lg:h-[40px] dmd:h-[60px]'></div>
            </div>
            <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
              <div className='relative w-[90%] border-1 border-t-0 border-b-0 border-oliveBlack/70 border-dashed lg:w-full lg:h-[85px] lg:border-0 lg:border-t-1 lg:border-b-1'>
                {/* Horizontal Running Grid Beam (Top Line) */}
                <div className='hidden lg:block absolute -top-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-about beam-delay-top-about' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                {/* Horizontal Running Grid Beam (Below Badge Line) */}
                <div className='hidden lg:block absolute -bottom-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-about beam-delay-badge' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                <svg
                  aria-hidden="true"
                  className="absolute -top-[37.5px] -left-[37.5px] pointer-events-none z-10"
                  data-side="top-left"
                  fill="none"
                  height="75"
                  viewBox="0 0 75 75"
                  width="75"
                >
                  <path
                    d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
                    stroke="#3A3B3C"
                    strokeOpacity="0.7"
                    strokeDasharray="2 2"
                  />
                </svg>
                <div className="flex items-end justify-end w-full h-[80px] px-2 mobile-xl:w-[90%] sm:w-[60%] md:w-[50%] lg:w-[460px] lg:px-4">
                  <div id='experience-wrapper' className="w-full h-[39px] flex items-center justify-start gap-[5px] bg-linear-to-r from-eucalyptusGreen/20 to-raisinBlack/1 rounded-full pl-[10px] pr-[14px] mb-[20px]">
                    <div className="experience relative flex items-center justify-center w-[10px] h-[10px]">
                      <span className='absolute w-[8px] h-[8px] rounded-full bg-mountainGreen/40 animate-ping'></span>
                      <span className="relative w-[6px] h-[6px] rounded-full bg-crayolaGreen"></span>
                    </div>
                    <a href='https://motorsights.com/' target='_blank' className="experience text-white text-sm whitespace-nowrap">
                      Orchestrating experiences at <span className="font-medium underline">Motor Sights<span className="hidden lg:inline"> International</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
              <div className="relative flex flex-col items-start justify-start gap-1 w-[90%] h-auto border-1 border-t-0 border-b-0 border-oliveBlack/70 border-dashed pt-1 pb-5 px-3 lg:w-full lg:h-[200px] lg:border-0 lg:border-b-1 lg:px-5">
                {/* Horizontal Running Grid Beam (Below Bio Line) */}
                <div className='hidden lg:block absolute -bottom-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-about beam-delay-bio' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                <h1 id='about-title' className="font-semibold text-white text-[38px] lg:text-[52px]">
                  Hey! I&apos;m{' '}
                  <span className="text-transparent bg-gradient-to-br from-[#5a5d63] from-[5%] via-crayolaGreen to-[#5a5d63] to-[95%] bg-clip-text">
                    Yudha
                  </span>
                </h1>
                <p id='about-desc' className="text-seashell text-base leading-[24px]">
                  I started out designing interfaces, then went deeper into building them — now I spend my days turning complex logistics workflows into interfaces that just make sense.
                  Getting there means obsessing over the small stuff nobody notices until it&apos;s missing.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full border-t-1 border-oliveBlack/70 border-dashed lg:flex-row lg:border-0">
              <div className="relative flex flex-col items-start justify-start gap-8 w-[90%] h-[150px] border-1 border-t-0 border-b-0 border-oliveBlack/70 border-dashed pt-5 pb-5 px-3 lg:gap-[30px] lg:w-full lg:h-full lg:border-0 lg:border-b-1 lg:px-5">
                {/* Horizontal Running Grid Beam (Below Buttons Line) */}
                <div className='hidden lg:block absolute -bottom-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-about beam-delay-bottom-about' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                <div className='about-link flex items-center justify-start gap-4 w-full lg:w-auto lg:gap-3 lg:justify-center mobile-md:gap-2'>
                  <Button type='link' href='mailto:yudhaericpamungkas@gmail.com' variant='highlight'>Get in Touch</Button>
                  <Button
                    onClick={() => handleClickProjectsSection('projects')} 
                    variant='basic'
                  >
                    View Projects
                  </Button>
                </div>
                <div className='about-link flex items-center justify-center gap-[13px] mb-[6px] lg:gap-[10px]'>
                  {socialMedias.map((social) => {
                    const socialName = social.icon.includes('resume') ? 'Resume' :
                                       social.icon.includes('linkedin') ? 'LinkedIn' :
                                       social.icon.includes('github') ? 'Github' :
                                       social.icon.includes('whatsapp') ? 'WhatsApp' : 
                                       social.icon.includes('instagram') ? 'Instagram' : "";
                    return (
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        key={social.id} 
                        className='relative group scale-icon w-[22px] h-[22px] lg:w-[18px] lg:h-[18px] 2xl:w-[20px] 2xl:h-[20px]'
                      >
                        <img src={social.icon} alt="" className='w-full h-full opacity-50'/>
                        {socialName && (
                          <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] text-seashell bg-raisinBlack border border-oliveBlack/60 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg'>
                            {socialName}
                            {/* Downward Arrow */}
                            <span className='absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-raisinBlack'></span>
                          </span>
                        )}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className='w-full lg:w-full lg:h-[40px] dmd:h-[60px]'></div>
            </div>
          </div>
          
          {/* Picture */}
          <div className='w-full h-[370px] flex flex-col items-center justify-center border-b-1 border-t-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:flex-row lg:w-[41%] lg:h-[420px] lg:border-0 dmd:h-[550px] pr-1'>
            <div className="relative flex flex-col items-center justify-center w-[90%] h-[370px] lg:w-full lg:h-full">
              {/* Vertical Running Grid Beam (Rightmost Line) */}
              <div className='hidden lg:block absolute top-0 -right-[0.5px] w-[1px] h-full overflow-hidden pointer-events-none z-10'>
                <div 
                  className={`${isMounted ? 'grid-beam-v beam-delay-v-right' : 'opacity-0'} w-full h-[150px]`} 
                  style={beamVerticalStyle}
                />
              </div>
              <div className="mobile-sm:hidden lg:flex items-center justify-center w-full h-[40px] dmd:h-[60px]">
                <div className='w-full border-r-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed lg:w-full h-full'></div>
              </div>
              
              <div className="relative flex flex-col items-center justify-center gap-1 w-full h-[370px] border-l-1 border-r-1 border-oliveBlack/70 border-dashed lg:gap-0 lg:w-full lg:h-[420px] lg:border-t-1 lg:border-l-0 lg:border-b-1 dmd:h-[422px]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #3A3B3C 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              >
                {/* Horizontal Running Grid Beam (Picture Top Line) */}
                <div className='hidden lg:block absolute -top-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-photo beam-delay-top-photo' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                {/* Horizontal Running Grid Beam (Picture Bottom Line) */}
                <div className='hidden lg:block absolute -bottom-[0.5px] left-0 w-full h-[1px] overflow-hidden pointer-events-none z-10'>
                  <div 
                    className={`${isMounted ? 'grid-beam-h-photo beam-delay-bottom-photo' : 'opacity-0'} h-full w-[150px]`} 
                    style={beamHorizontalStyle}
                  />
                </div>
                <div id='about-picture' className="bg-aeroBlue/10 rounded-[10px] w-[208px] h-[294px]">
                  <img src="/images/pictures.png" alt="" className="w-full h-full rounded-[10px] animate-float3d" />
                </div>
              </div>

              <div id='bottom-grid-desktop' className="mobile-sm:hidden lg:flex items-center justify-center w-full lg:h-[40px] dmd:h-[60px] border-r-1 border-oliveBlack/40 border-dashed"></div>
            </div>
          </div>
          <div id='bottom-grid-mobile' className="w-[90%] h-[60px] border-l-1 border-r-1 border-oliveBlack/70 border-dashed lg:hidden"></div>
        </div>
        <div id='outer-right-grid'>
          <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[420px] border-t-1 border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed mt-[40px] lg:w-[40px] dmd:w-[60px] lg:h-[420px] 2xl:h-[422px] 2xl:mt-[39px]'></div>
        </div>
      </div>
    </section>
  );
}