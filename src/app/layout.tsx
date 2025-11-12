import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natalie Lord",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} font-sans text-neutral-800 bg-gradient-to-br from-white to-indigo-50 min-h-screen`}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-10 bg-gradient-to-r from-sky-50 to-indigo-100 border-b border-indigo-200 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-[0.95rem]">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-indigo-900 hover:text-indigo-600 transition"
            >
              Natalie Lord
            </Link>

            <nav className="flex gap-6 text-indigo-800">
              <Link href="/" className="hover:text-indigo-600 transition">
                Intro
              </Link>
              <Link href="/resume" className="hover:text-indigo-600 transition">
                Resume
              </Link>
              <Link href="/projects" className="hover:text-indigo-600 transition">
                Projects
              </Link>
              <Link href="/photos" className="hover:text-indigo-600 transition">
                Photo Album
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-200 text-center py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Natalie Lord · Built with Next.js & Tailwind CSS
        </footer>
      </body>
    </html>
  );
}
