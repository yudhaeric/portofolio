// app/components/ui/Button.tsx
'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'highlight' | 'basic';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children,
  variant = 'basic',
  onClick,
  className = '',
}: ButtonProps) {
  
  // styles
  const baseWrapper = "flex items-center justify-center w-[140px] h-[48px] text-seashell text-sm rounded-[5px] transition-all duration-300 cursor-pointer p-[1px] lg:w-[121px] lg:h-[40px]";
  const baseButton = "flex items-center justify-center w-full h-full rounded-[5px]";
  const borderGradient = "bg-gradient-to-br from-charlestonGreen via-platinum/40 via-[22%] to-charlestonGreen";

  const variants = {
    highlight: "bg-gradient-to-r from-charlestonGreen via-oliveBlack via-[49%] to-charlestonGreen to-[75%]",
    basic: "bg-raisinBlack"
  };

  return (
    <button
      className={`${baseWrapper} ${borderGradient} ${className}`}
      onClick={onClick}
    >
      <span className={`${baseButton} ${variants[variant]} ${className}`}>
        {children}
      </span>
    </button>
  );
}