import AboutSection from '@/app/components/AboutSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import { projects } from '@/app/data/projects';

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ProjectsSection projects={projects} />
    </main>
  );
}
