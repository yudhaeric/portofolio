import { Metadata } from 'next';
import ProjectsCatalog from './ProjectsCatalog';
import { projects } from '@/app/data/projects';

export const metadata: Metadata = {
  title: "Projects — Yudha Eric Pamungkas",
  description: "A comprehensive collection of web applications, enterprise systems, and interactive digital experiences built by Yudha Eric Pamungkas.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#131415]">
      <ProjectsCatalog projects={projects} />
    </main>
  );
}
