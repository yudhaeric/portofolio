import React from 'react';

const Header = () => {
  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-5 left-0 right-0 mx-auto w-[300px] h-[55px] rounded-[10px] z-[99]">
      <nav className="relative w-full h-full">
        {/* Background Blur */}
        <div 
          className="absolute inset-0 bg-oliveBlack/90 rounded-[10px]" 
          style={{ filter: 'blur(5px)' }}
        ></div>

        <div className="relative h-full z-10">
          <ul className="flex items-center justify-center gap-5 h-full px-5">
            {menuItems.map((item, index) => (
              <li key={item.name} className="flex-1">
                <a
                  href={item.href}
                  className={`${index === 0 ? 'text-crayolaGreen' : 'text-sonicSilver hover:text-seashell'} transition-colors duration-300 text-sm font-medium block text-center py-2`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;