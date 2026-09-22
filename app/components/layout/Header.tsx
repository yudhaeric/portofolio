'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useSectionStore } from '../../store/sectionStore';

const menuItems = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sectionRefs = useSectionStore((state) => state.sectionRefs);
  const [activeSection, setActiveSection] = useState(
    pathname === '/projects' ? "projects" : pathname === '/about' ? "about" : "home"
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pathname === '/projects') {
      setActiveSection("projects");
    } else if (pathname === '/about') {
      setActiveSection("about");
    } else if (pathname === '/') {
      if (typeof window !== 'undefined' && !window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      }
    }
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");
    } else {
      e.preventDefault();
      router.push('/');
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");
    }
  };

  // Click outside and escape key handling for mobile dropdown menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleClickNavItem = (section: string) => {
    setIsMobileMenuOpen(false);

    if (section === 'home') {
      if (pathname === '/') {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push('/');
      }
      return;
    }

    if (section === 'about') {
      if (pathname === '/about') {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push('/about');
      }
      return;
    }

    if (section === 'projects') {
      if (pathname === '/projects') {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push('/projects');
      }
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

  // Scroll visibility and bottom active state detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu on substantial scroll
      if (Math.abs(currentScrollY - lastScrollY) > 25) {
        setIsMobileMenuOpen(false);
      }

      // 1. Bottom detection and top detection (only on home page)
      if (pathname === '/') {
        const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;
        if (isAtBottom) {
          setActiveSection("");
        } else if (currentScrollY < 150) {
          setActiveSection("home");
        }
      }

      // 2. Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, pathname]);

  // Hover detection at the top of the viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 60) {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // IntersectionObserver spy for center screen elements (only on home page)
  useEffect(() => {
    if (pathname !== '/') return;

    const elements = Object.entries(sectionRefs);
    if (elements.length === 0) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Avoid overriding if we're at the absolute bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        setActiveSection("");
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionKey = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key] === entry.target
          );
          if (sectionKey) {
            setActiveSection(sectionKey === 'about' ? 'home' : sectionKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    });

    elements.forEach(([, element]) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs, pathname]);

  return (
    <header 
      className={`fixed top-4 lg:top-5 left-0 right-0 mx-auto w-[90%] lg:w-max lg:max-w-[92vw] h-[48px] lg:h-[55px] px-0 lg:px-6 rounded-none lg:rounded-[10px] z-[99] bg-transparent border-0 lg:border lg:border-oliveBlack/20 lg:bg-gradient-to-r lg:from-seashell/10 lg:via-[#131415]/95 lg:to-seashell/10 backdrop-blur-none transition-all duration-500 ease-in-out ${
        isHeaderVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHeaderVisible(true)}
    >
      <nav className="relative w-full h-full flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        {/* Left: Brand Logo & Name */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          aria-label="Return to Home"
          className="flex items-center gap-1.5 cursor-pointer group select-none"
        >
          <Image 
            src="/images/inside-yudha-logo.png" 
            alt="inside-yudha logo" 
            width={26}
            height={22}
            priority
            className="h-6 sm:h-[18px] lg:h-[18px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-medium text-sm lg:text-base text-white tracking-tight whitespace-nowrap">
            inside-yudha
          </span>
        </Link>

        {/* Divider (Desktop Only) */}
        <span className="hidden lg:inline text-oliveBlack/80 font-light text-sm select-none">|</span>

        {/* Right: Desktop Nav Menu */}
        <ul className="hidden lg:flex items-center gap-3 sm:gap-4 lg:gap-7">
          {menuItems.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <li key={item.name} className="items-center justify-center">
                <button
                  onClick={() => handleClickNavItem(item.section)}
                  className={`font-medium text-xs sm:text-sm lg:text-base text-center transition-colors duration-300 block cursor-pointer py-1 ${
                    isActive ? 'text-crayolaGreen' : 'text-sonicSilver hover:text-seashell'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: Mobile Menu Button & Dropdown */}
        <div className="relative flex lg:hidden items-center" ref={menuRef}>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-raisinBlack border border-oliveBlack/70 text-seashell hover:text-white hover:border-oliveBlack transition-all duration-200 cursor-pointer text-sm font-medium tracking-wide shadow-md backdrop-blur-none select-none"
          >
            <span>Menu</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-180 text-crayolaGreen' : 'text-sonicSilver'
              }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Mobile Dropdown Menu Card */}
          {isMobileMenuOpen && (
            <div 
              className="absolute top-[calc(100%+8px)] right-0 w-36 py-1.5 px-1.5 bg-[#131415] border border-oliveBlack/80 rounded-[10px] shadow-2xl z-50 flex flex-col gap-1 backdrop-blur-none transition-all duration-200 ease-out"
              role="menu"
              aria-orientation="vertical"
            >
              {menuItems.map((item) => {
                const isActive = activeSection === item.section;
                return (
                  <button
                    key={item.name}
                    role="menuitem"
                    onClick={() => handleClickNavItem(item.section)}
                    className={`w-full text-left px-3 py-2 rounded-[6px] text-sm font-medium transition-colors duration-200 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-raisinBlack text-crayolaGreen font-semibold'
                        : 'text-seashell/80 hover:text-white hover:bg-raisinBlack/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-crayolaGreen" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;