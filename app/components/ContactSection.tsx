'use client'
import { useEffect, useRef } from 'react';
import { useSectionStore } from '../store/sectionStore';
import { useContactAnimation } from '../hooks/useContactAnimation';

export default function ContactSection () {
  const contactRef = useRef<HTMLElement | null>(null);
  const setSectionRef = useSectionStore((state) => state.setSectionRef);
  
  useContactAnimation(contactRef);
  
  useEffect(() => {
    if (contactRef.current) {
      setSectionRef("contact", contactRef.current);
    }
  }, [setSectionRef]);

  return (
    <section ref={contactRef} id='get-in-touch'>
      <div className="flex items-start justify-start gap-[1px] w-[90%] mt-[20px] mx-auto mb-10 lg:items-start lg:justify-start lg:w-[1050px] lg:mx-auto lg:h-[300px] lg:mt-[60px] lg:mb-0">
        <div id='outer-left-grid'>
          <div className='hidden lg:flex flex-col items-center justify-center w-[40px] h-[40px] border-b-1 border-oliveBlack/70 lg:border-oliveBlack/40 border-dashed'></div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[1px] w-full h-full'>
          <div className='flex flex-col items-center justify-center w-full h-[40px] lg:border-l-1 lg:border-b-1 lg:border-oliveBlack/40 lg:border-dashed'></div>
          <div className='flex flex-col items-start justify-start gap-3 w-full h-[190px] lg:border-l-1 lg:border-oliveBlack/40 lg:border-dashed lg:pt-5 lg:pl-6'>
            <h1 className='font-semibold text-transparent text-[32px] bg-gradient-to-b from-white to-[#999999] bg-clip-text lg:text-[28px]'>Get In Touch</h1>
            <p className='text-base text-seashell leading-6 lg:leading-7'>
              <span className='lg:block'>Do you have a job opportunity or idea you&apos;d like to discuss?</span> Feel free to reach me at &nbsp;
              <a id='email-contact' href="mailto:yudhaericpamungkas@gmail.com" className='font-semibold text-seashell'>yudhaericpamungkas@gmail.com</a><br/>You can also find me on&nbsp;
              <a id='linkedin-contact' href="https://www.linkedin.com/in/yudha-eric-pamungkas/" target="_blank" rel="noopener noreferrer" className='font-semibold text-seashell'>Linkedin</a>&nbsp;and&nbsp;
              <a id='github-contact' href="https://github.com/yudhaeric" target="_blank" rel="noopener noreferrer" className='font-semibold text-seashell'>Github</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}