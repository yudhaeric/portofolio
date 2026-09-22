import { Metadata } from 'next';
import AboutView from './AboutView';

export const metadata: Metadata = {
  title: "About — Yudha Eric Pamungkas",
  description: "Learn more about Yudha Eric Pamungkas, a Frontend Engineer with 4 years of experience building modern, scalable, and high-performance web applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-420px)] bg-[#131415]">
      <AboutView />
    </main>
  );
}
