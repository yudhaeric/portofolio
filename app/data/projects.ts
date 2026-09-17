import { Project } from '../utils/types';

export const projects: Project[] = [
  { 
    id: 1,
    image: "/images/wms-preview.png",
    title: "Warehouse Management System",
    url: "https://waretech-preprod.iti.co.id/",
    desc: "An enterprise-grade Warehouse Management System designed to streamline logistics operations. It supports Inbound receiving, Outbound fulfillment including picking and packing, and Inventory management with features like cycle counting. The system also includes role-based access control, multi-language support, and Excel reporting.",
    tech: "Next.js · TypeScript · Tailwind CSS · TanStack Query · TanStack Table · Zod",
    category: "Web App",
    featured: true
  },
  { 
    id: 2,
    image: "/images/parkserpong-preview.png",
    title: "Park Serpong",
    url: "https://parkserpong.com/",
    desc: "Responsive real estate website for Park Serpong featuring an interactive mortgage simulation where users can input their budget to view matching properties. Includes an “Our Product” page, WhatsApp integration, and mobile-friendly design.",
    tech: "Umbraco · C# · jQuery · Tailwind CSS",
    category: "Property",
    featured: true
  },
  { 
    id: 3,
    image: "/images/teh-botol-sosro-preview.png",
    title: "Teh Botol Sosro",
    url: "https://www.tehbotolsosro.com/",
    desc: "Official brand website for Teh Botol Sosro featuring a custom geolocation-based greeting system that dynamically adapts to Indonesian regional cultures. Interactive brand campaigns, and a Backpack CRUD admin dashboard to manage articles, campaigns, and events.",
    tech: "Laravel · PHP · Backpack · Tailwind CSS · Vite · jQuery",
    category: "Brand",
    featured: true
  },
  { 
    id: 4,
    image: "/images/es-poci-preview.png",
    title: "Es Teh Poci",
    url: "https://estehpoci.id/",
    desc: "Interactive franchise and brand portal for Es Teh Poci. Features a dynamic partner registration flow ('Jadi Juragan') synced with the Google Sheets API for real-time lead capture, a custom personality quiz engine matching users to product flavors, and highly engaging scroll animations using GSAP.",
    tech: "Laravel · PHP · Backpack CRUD · Tailwind CSS · Vite · GSAP · Google Sheets API · Swiper",
    category: "Brand",
    featured: false
  },
  { 
    id: 5,
    image: "/images/obhc-preview.png",
    title: "OBH Combi",
    url: "https://obhcombi.co.id/",
    desc: "Corporate website for OBH Combi featuring two distinct themes for adults and children with separate, tailored product catalogs. The children's theme includes interactive maze and puzzle games to engage users. Built responsive and SEO-optimized for fast, accessible browsing on all devices.",
    tech: "NextJS · jQuery · Redux · Tailwind CSS · Laravel",
    category: "Brand",
    featured: false
  },
  { 
    id: 6,
    image: "/images/combiphar-preview.png",
    title: "Combiphar",
    url: "https://www.combiphar.com/id",
    desc: "Corporate website for Combiphar showcasing a categorized product catalog with detailed product pages, CSR & news sections, career pages, and multilingual support. Built responsive and SEO-conscious for fast, accessible browsing on mobile and desktop.",
    tech: "NextJS · jQuery · Tailwind CSS · Laravel",
    category: "Corporate",
    featured: false
  },
];
