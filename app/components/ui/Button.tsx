// app/components/ui/Button.tsx
'use client';
import Link from 'next/link';

type ButtonAsButton = {
  children: React.ReactNode;
  type?: 'button';
  variant?: 'highlight' | 'basic';
  onClick?: () => void;
  className?: string;
  href?: never;
  target?: never;
};

type ButtonAsLink = {
  children: React.ReactNode;
  type: 'link';
  variant?: 'highlight' | 'basic';
  href: string;
  target?: string;
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
  target,
  className = '',
}: ButtonProps) {
  // styles
  const baseWrapper = "flex items-center justify-center w-[140px] h-[40px] text-seashell text-sm rounded-[5px] transition-all duration-300 cursor-pointer p-[1px] lg:w-[135px] lg:h-[40px]";
  const baseButton = "relative z-10 flex items-center justify-center w-full h-full rounded-[5px]";
  const borderGradient = "bg-gradient-to-br from-charlestonGreen via-platinum/40 via-[22%] to-charlestonGreen";

  const variants = {
    highlight: "bg-gradient-to-r from-charlestonGreen via-oliveBlack via-[49%] to-charlestonGreen to-[75%]",
    basic: "bg-raisinBlack"
  };

  const commonClassNames = [
    baseWrapper,
    borderGradient,
    "running-light-border",
    className
  ].filter(Boolean).join(" ").trim();

  const innerClassNames = [
    baseButton,
    variants[variant]
  ].filter(Boolean).join(" ").trim();

  if (type === 'link' && href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link
          href={href}
          className={commonClassNames}
        >
          <span className={innerClassNames}>
            {children}
          </span>
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target || "_blank"}
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