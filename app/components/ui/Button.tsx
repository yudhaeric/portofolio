// app/components/ui/Button.tsx
'use client';
import { useRef, useEffect } from 'react';
import { useSectionStore } from '../../store/sectionStore';

type ButtonAsButton = {
  children: React.ReactNode;
  type?: 'button';
  variant?: 'highlight' | 'basic';
  onClick?: () => void;
  className?: string;
  href?: never;
};

type ButtonAsLink = {
  children: React.ReactNode;
  type: 'link';
  variant?: 'highlight' | 'basic';
  href: string;
  onClick?: never;
  className?: string;
};

// Menggabungkan kedua type
type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ 
  children,
  type = 'button',
  variant = 'basic',
  onClick,
  href,
  className = '',
}: ButtonProps) {

  const projectsRef = useRef<HTMLElement | null>(null);
  const setSectionRef = useSectionStore((state) => state.setSectionRef);
  
  useEffect(() => {
    if (projectsRef.current) {
      setSectionRef("projects", projectsRef.current);
    }
  }, [setSectionRef]);
  
  // styles
  const baseWrapper = "flex items-center justify-center w-[140px] h-[48px] text-seashell text-sm rounded-[5px] transition-all duration-300 cursor-pointer p-[1px] lg:w-[121px] lg:h-[40px]";
  const baseButton = "flex items-center justify-center w-full h-full rounded-[5px]";
  const borderGradient = "bg-gradient-to-br from-charlestonGreen via-platinum/40 via-[22%] to-charlestonGreen";

  const variants = {
    highlight: "bg-gradient-to-r from-charlestonGreen via-oliveBlack via-[49%] to-charlestonGreen to-[75%]",
    basic: "bg-raisinBlack"
  };

  const commonClassNames = `${baseWrapper} ${borderGradient} ${className}`;
  const innerClassNames = `${baseButton} ${variants[variant]} ${className}`;

  if (type === 'link') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClassNames}
      >
        <span className={innerClassNames}>
          {children}
        </span>
      </a>
    );
  } else {
    return (
      <button
        className={commonClassNames}
        onClick={onClick}
      >
        <span className={innerClassNames}>
          {children}
        </span>
      </button>
    );
  }
}