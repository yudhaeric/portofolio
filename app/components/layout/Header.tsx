'use client'
import { useEffect, useState } from 'react';
import { useSectionStore } from '../../store/sectionStore';

const menuItems = [
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const Header = () => {
  const sectionRefs = useSectionStore((state) => state.sectionRefs);
  const [activeSection, setActiveSection] = useState("about");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClickNavItem = (section: string) => {
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

      // 1. Bottom detection
      const isAtBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        setActiveSection("contact");
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
  }, [lastScrollY]);

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

  // IntersectionObserver spy for center screen elements
  useEffect(() => {
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
  }, [sectionRefs]);

  return (
    <header 
      className={`fixed top-5 left-0 right-0 mx-auto w-[300px] h-[55px] rounded-[10px] z-[99] lg:w-[320px] bg-gradient-to-r from-seashell/10 via-[#131415]/95 to-seashell/10 border border-oliveBlack/20 transition-all duration-500 ease-in-out ${
        isHeaderVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHeaderVisible(true)}
    >
      <nav className="relative w-full h-full">
        <div className="relative h-full z-10">
          <ul className="flex items-center justify-center gap-5 h-full px-5">
            {menuItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <li key={item.name} className="flex-1 items-center justify-center">
                  <button
                    onClick={() => handleClickNavItem(item.section)}
                    className={`w-full h-full font-semibold text-sm text-center transition-colors duration-300 block cursor-pointer py-2 lg:text-base ${
                      isActive ? 'text-crayolaGreen' : 'text-sonicSilver hover:text-seashell'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;