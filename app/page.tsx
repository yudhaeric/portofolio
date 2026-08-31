import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const socialMedias = [
    { id: 1, url: "https://wa.me/62895330028942", icon: "/icons/whatsapp.svg"},
    { id: 2, url: "https://www.linkedin.com/in/yudha-eric-pamungkas/", icon: "/icons/linkedin.svg"},
    { id: 3, url: "https://github.com/yudhaeric", icon: "/icons/github.svg"},
    { id: 4, url: "https://www.instagram.com/yudhapmksss/", icon: "/icons/instagram.svg"},
    { id: 5, url: "https://drive.google.com/file/d/1-Jiw5CyA9SzDEL2IWx3qQz-rW9eQOwZ1/view?usp=sharing", icon: "/icons/resume.svg"},
  ];
  
  const projects = [
    { 
      id: 1,
      image: "/images/wms-preview.png",
      title: "Warehouse Management System",
      url: "https://waretech-preprod.iti.co.id/",
      desc: "An enterprise-grade Warehouse Management System designed to optimize logistics. Features streamlined Inbound receiving, Outbound fulfillment (picking and packing), and Inventory controls like cycle counting. Built with strict role-based access control, multi-language support, and Excel reporting.",
      tech: "Next.js 15 - React 19 - TypeScript - Tailwind CSS - TanStack Query & Table - Zod Validation"
    },
    { 
      id: 2,
      image: "/images/parkserpong-preview.png",
      title: "Park Serpong",
      url: "https://parkserpong.com/",
      desc: "Responsive real estate website for Park Serpong featuring an interactive mortgage simulation where users can input their budget to view matching properties. Includes an “Our Product” page, WhatsApp integration, and mobile-friendly design.",
      tech: "Umbraco CMS - C# - JQuery - Tailwind CSS"
    },
    { 
      id: 3,
      image: "/images/teh-botol-sosro-preview.png",
      title: "Teh Botol Sosro",
      url: "https://www.tehbotolsosro.com/",
      desc: "Official brand website for Teh Botol Sosro featuring a custom geolocation-based greeting system that dynamically adapts to Indonesian regional cultures. Includes multi-language support (i18n), interactive brand campaigns, and a Backpack CRUD admin dashboard to manage articles, campaigns, and events.",
      tech: "Laravel 10 - PHP 8.1 - Backpack CRUD - Tailwind CSS - Vite - jQuery - Geolocation API"
    },
    { 
      id: 4,
      image: "/images/es-poci-preview.png",
      title: "Es Teh Poci",
      url: "es-poci-preview.png",
      desc: "Interactive franchise and brand portal for Es Teh Poci. Features a dynamic partner registration flow ('Jadi Juragan') synced with the Google Sheets API for real-time lead capture, a custom personality quiz engine matching users to product flavors, and highly engaging scroll animations using GSAP.",
      tech: "Laravel 12 - PHP 8.2 - Backpack CRUD - Tailwind CSS v4 - Vite 6 - GSAP - Google Sheets API - Swiper"
    },
    { 
      id: 5,
      image: "/images/obhc-preview.png",
      title: "OBH Combi",
      url: "https://obhcombi.co.id/",
      desc: "Corporate website for OBH Combi featuring two distinct themes for adults and children with separate, tailored product catalogs. The children's theme includes interactive maze and puzzle games to engage users. Built responsive and SEO-optimized for fast, accessible browsing on all devices.",
      tech: "NextJS 15 - JQuery - Redux - Tailwind CSS - Laravel"
    },
    { 
      id: 6,
      image: "/images/combiphar-preview.png",
      title: "Combiphar",
      url: "https://www.combiphar.com/id",
      desc: "Corporate website for Combiphar showcasing a categorized product catalog with detailed product pages, CSR & news sections, career pages, and multilingual support. Built responsive and SEO-conscious for fast, accessible browsing on mobile and desktop.",
      tech: "NextJS 14 - JQuery - Tailwind CSS - Laravel"
    },
  ];

  return (
    <main>
      <AboutSection socialMedias={socialMedias} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
