'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useSectionStore } from '../../store/sectionStore';
import logoImg from '@/public/images/inside-yudha-logo.png';

const menuItems = [
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const sectionRefs = useSectionStore((state) => state.sectionRefs);
  const [activeSection, setActiveSection] = useState(pathname === '/projects' ? "projects" : "about");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (pathname === '/projects') {
      setActiveSection("projects");
    }
  }, [pathname]);

  const handleClickNavItem = (section: string) => {
    if (pathname !== '/') {
      if (section === 'projects') {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push(`/#${section}`);
      }
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

      // 1. Bottom detection (only on home page)
      if (pathname === '/') {
        const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;
        if (isAtBottom) {
          setActiveSection("contact");
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
        setActiveSection("contact");
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionKey = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key] === entry.target
          );
          if (sectionKey) {
            setActiveSection(sectionKey);
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
      className={`fixed top-5 left-0 right-0 mx-auto w-max max-w-[92vw] h-[55px] px-4 lg:px-6 rounded-[10px] z-[99] bg-gradient-to-r from-seashell/10 via-[#131415]/95 to-seashell/10 border border-oliveBlack/20 transition-all duration-500 ease-in-out ${
        isHeaderVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHeaderVisible(true)}
    >
      <nav className="relative w-full h-full flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        {/* Left: Brand Logo & Name */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center cursor-pointer group select-none"
        >
          <Image 
            src={logoImg} 
            alt="inside-yudha logo" 
            priority
            className="h-5 sm:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-semibold text-sm lg:text-base text-white tracking-tight whitespace-nowrap">
            inside-yudha
          </span>
        </Link>

        {/* Divider */}
        <span className="text-oliveBlack/80 font-light text-sm select-none">|</span>

        {/* Right: Nav Menu */}
        <ul className="flex items-center gap-3 sm:gap-4 lg:gap-7">
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
      </nav>
    </header>
  );
};

export default Header;