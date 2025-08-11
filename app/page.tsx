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
      id: 1, image: "/images/obhc-preview.png",
      title: "OBH Combi",
      url: "https://obhcombi.co.id/",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tech: "NextJS 15 - JQuery - Redux - Tailwind CSS - Laravel"
    },
    { 
      id: 2,
      image: "/images/parkserpong-preview.png",
      title: "Park Serpong",
      url: "https://parkserpong.com/",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tech: "Umbraco CMS - C# - JQuery - Tailwind CSS"
    },
    { 
      id: 3,
      image: "/images/combiphar-preview.png",
      title: "Combiphar",
      url: "https://www.combiphar.com/id",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
