/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSectionStore } from '../../store/sectionStore';
import { useContactAnimation } from '../../hooks/useContactAnimation';
import { socialMedias } from '../../data/socialMedias';
import Button from '../ui/Button';

export default function Footer() {
  const contactRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const setSectionRef = useSectionStore((state) => state.setSectionRef);
  const sectionRefs = useSectionStore((state) => state.sectionRefs);

  useContactAnimation(contactRef, pathname);

  useEffect(() => {
    if (contactRef.current) {
      setSectionRef("contact", contactRef.current);
    }
  }, [setSectionRef]);

  const handleScrollToSection = (section: string) => {
    if (section === 'home') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
      return;
    }

    if (section === 'about') {
      if (pathname === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/about');
      }
      return;
    }

    if (section === 'projects') {
      if (pathname === '/projects') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/projects');
      }
      return;
    }

    if (section === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${section}`);
      return;
    }

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
    <footer ref={contactRef} id="get-in-touch" className="w-full">
      {/* Contact Section Block */}
      <div className="flex items-start justify-start gap-[1px] w-[90%] mt-[20px] mx-auto mb-10 lg:w-[1050px] lg:mx-auto lg:mt-[60px] lg:mb-12">
        <div id="outer-left-grid" className="hidden lg:block w-[40px]">
          <div className="flex flex-col items-center justify-center w-[40px] h-[40px] border-b-1 border-oliveBlack border-dashed"></div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1px] w-full">
          <div className="flex flex-col items-center justify-center w-full h-[40px] lg:border-l-1 lg:border-b-1 lg:border-oliveBlack lg:border-dashed"></div>
          
          <div className="flex flex-col justify-center gap-8 w-full lg:flex-row lg:gap-[50px] lg:border-l-1 lg:border-oliveBlack lg:border-dashed lg:pt-8 lg:pl-8 text-seashell">
            {/* Column 1: Profile & Socials */}
            <div className="flex flex-col gap-4 w-full lg:w-[320px]">
              <h2 className="font-semibold text-2xl text-white">
                Yudha Eric Pamungkas
              </h2>
              <p className="text-sm text-sonicSilver leading-6 max-w-[280px]">
                Building thoughtful web experiences with clean code, scalability, and attention to detail.
              </p>
              <div className="flex items-center gap-[13px] mt-2">
                {socialMedias.map((social) => {
                  const socialName = social.icon.includes('whatsapp') ? 'WhatsApp' :
                                    social.icon.includes('linkedin') ? 'LinkedIn' :
                                    social.icon.includes('github') ? 'Github' :
                                    social.icon.includes('instagram') ? 'Instagram' :
                                    social.icon.includes('resume') ? 'Resume' : '';
                  return (
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={social.id} 
                      className={`${social.name === "whatsapp" ? "w-28 h-28 " : ""}relative group scale-icon w-[20px] h-[20px] lg:w-[20px] lg:h-[20px]`}
                    >
                      <img src={social.icon} alt="" className="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"/>
                      {socialName && (
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] text-seashell bg-raisinBlack border border-oliveBlack/60 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                          {socialName}
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-raisinBlack"></span>
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="flex flex-col gap-4 w-full lg:w-[120px]">
              <h2 className="font-medium text-sm text-platinum mt-1">
                General
              </h2>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <button 
                    onClick={() => handleScrollToSection('home')}
                    className="text-sonicSilver hover:text-crayolaGreen transition-colors duration-300 text-left cursor-pointer font-regular"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('about')}
                    className="text-sonicSilver hover:text-crayolaGreen transition-colors duration-300 text-left cursor-pointer font-regular"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('projects')}
                    className="text-sonicSilver hover:text-crayolaGreen transition-colors duration-300 text-left cursor-pointer font-regular"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleScrollToSection('contact')}
                    className="text-sonicSilver hover:text-crayolaGreen transition-colors duration-300 text-left cursor-pointer font-regular"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="flex flex-col gap-4 w-full lg:w-[280px]">
              <h2 className="font-semibold text-lg text-white">
                Get In Touch
              </h2>
              <p className="text-sm text-sonicSilver leading-6">
                Do you have a job opportunity or idea you&apos;d like to discuss? Feel free to reach out via email!
              </p>
              <div className="mt-2">
                <Button 
                  type="link" 
                  href="mailto:yudhaericpamungkas@gmail.com" 
                  variant="basic"
                >
                  Reach Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Divider & Text */}
      <div className="flex flex-col items-center justify-center w-full mb-1">
        <div className="w-[90%] h-[1px] bg-linear-to-r from-charlestonGreen from-13% via-[#E4E4E4]/55 via-50% to-charlestonGreen to-87% lg:w-[700px]"></div>
        <p className="font-semibold text-[12px] text-center text-sonicSilver py-5">
          <span className="block mobile-xl:inline">Copyright ©{new Date().getFullYear()} Yudha Eric Pamungkas.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
