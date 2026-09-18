import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter_18pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yudha Eric Pamungkas — Frontend Engineer",
  description: "Portfolio of Yudha Eric Pamungkas, a detail-oriented Frontend Engineer specializing in building modern, performant, and scalable web applications.",
  keywords: [
    "Yudha Eric Pamungkas",
    "Frontend Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio"
  ],
  authors: [{ name: "Yudha Eric Pamungkas" }],
  creator: "Yudha Eric Pamungkas",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yudha Eric Pamungkas — Frontend Engineer",
    description: "Building thoughtful and scalable web experiences with clean code, scalability, and attention to detail.",
    siteName: "Inside Yudha",
    images: [
      {
        url: "/images/inside-yudha-logo.png",
        width: 800,
        height: 600,
        alt: "Inside Yudha Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yudha Eric Pamungkas — Frontend Engineer",
    description: "Building thoughtful and scalable web experiences with clean code, scalability, and attention to detail.",
    images: ["/images/inside-yudha-logo.png"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
