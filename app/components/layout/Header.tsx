'use client'
import { useSectionStore } from '../../store/sectionStore';

const menuItems = [
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const Header = () => {
  const sectionRefs = useSectionStore((state) => state.sectionRefs);

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

  return (
    <header className="fixed top-5 left-0 right-0 mx-auto w-[300px] h-[55px] rounded-[10px] z-[99] lg:w-[320px]">
      <nav className="relative w-full h-full">
        {/* Background Blur */}
        <div 
          className="absolute inset-0 bg-oliveBlack/90 rounded-[10px]" 
          style={{ filter: 'blur(5px)' }}
        ></div>

        <div className="relative  h-full z-10">
          <ul className="flex items-center justify-center gap-5 h-full px-5">
            {menuItems.map((item) => (
              <li key={item.name} className="flex-1 items-center justify-center">
                <button
                  onClick={() => handleClickNavItem(item.section)}
                  className={`w-full h-full font-medium text-sonicSilver text-sm text-center hover:text-seashell transition-colors duration-300 block cursor-pointer py-2 lg:text-base`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;