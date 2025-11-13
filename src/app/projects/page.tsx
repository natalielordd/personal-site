"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink, FiFileText } from "react-icons/fi";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;           // unique id
  summary: string;        // short blurb shown on the card
  cover: string;          // /public path for preview image (1:1 recommended)
  tags: string[];
  details?: string;       // shown in modal
  links?: { label: string; href: string; icon?: "github" | "document" | "external" }[];
  gallery?: { src: string; alt?: string; type: string; caption?: string }[]; // optional extra images in modal
};

const PROJECTS: Project[] = [
  {
    title: "Junos Terraform Automation Framework (JTAF)",
    slug: "jtaf",
    summary:
      "Open-source framework that generates Terraform providers for Juniper devices",
    cover: "/projects/jtaf.png",
    tags: ["Go", "Python", "Terraform", "Automation"],
    details:
      "JTAF is an open-source framework that builds Junos Terraform providers from YANG models. I contribute as part of an optional side project at work, helping design and test new provider logic. \n \n Check out the demo of our most recent release, which adds support for Junos groups.",
    links: [
      { label: "GitHub", href: "https://github.com/Juniper/junos-terraform", icon: "github" },
    ],
    gallery: [
      {src: "/projects/jtaf-1.1-release.mp4", type: "video", caption: "JTAF 1.1 Demo" }
    ],
  },
  {
  title: "Bruinfeed Quizzes - UCLA CS 130 Project" ,
  slug: "bruinfeed",
  summary:
    "A BuzzFeed-inspired quiz platform built on a C++ webserver framework",
  cover: "/projects/bruinfeed-quiz.png",
  tags: ["C++", "HTML", "CSS", "JavaScript"],
  details:
    "Bruinfeed Quizzes is a BuzzFeed-style personality quiz application built as the final project for UCLA CS 130. My team and I implemented our own modular C++ webserver, routing system, and request handlers, along with a fully custom frontend for taking and creating quizzes. \n \n I won't share the code just in case a future student comes across this page, but enjoy the demos and design doc.",
  links: [
    { label: "Design Doc", href: "https://docs.google.com/document/d/1K8nXA9BUjM8ZChGrhUPCvJESK-1yptQethhErNCa068/edit?usp=sharing", icon: "document" }
  ],
  gallery: [
    {
      src: "/projects/bruinfeed-demo1.mp4",
      type: "video",
      caption: "Taking a Quiz"
    },
    {
      src: "/projects/bruinfeed-demo2.mp4",
      type: "video",
      caption: "Creating a Quiz"
    }
  ]
  },
];

export default function ProjectsPage() {
  const [open, setOpen] = useState<number | null>(null);

  // Close modal with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-[calc(100vh-8rem)] px-6 py-10 text-neutral-800">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-900">
            Projects
          </h1>
        </header>

        {/* Grid of project cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setOpen(i)}
              className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden text-left shadow-sm hover:shadow-md transition
                        flex flex-col h-full"
              aria-label={`Open project ${p.title}`}
            >
              {/* Cover (square) */}
              <div className="relative w-full h-48 sm:h-auto sm:aspect-square bg-neutral-100">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  priority={i < 4}
                />
              </div>

              {/* Meta */}
              <div className="p-4">
                <h2
                  className="
                    text-lg font-semibold text-neutral-900
                    leading-snug
                    line-clamp-2
                    min-h-[2.6rem]   /* reserve space for 2 lines */
                  "
                >
                  {p.title}
                </h2>

                <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                  {p.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </section>
      </div>

      {/* Footer / Link */}
      <div className="text-center mt-12 text-sm text-neutral-500">
        <Link
          href="/"
          className="text-indigo-600 hover:text-indigo-400 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
      flex items-start sm:items-center justify-center
      px-2 sm:px-4 py-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl
    max-h-[90vh] sm:max-h-none
    overflow-y-auto sm:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            <article className="rounded-2xl overflow-hidden bg-white">
              {/* Title & links */}
              <div className="px-5 py-4 border-b border-neutral-200">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {PROJECTS[open].title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  {PROJECTS[open].links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-400"
                    >
                     {l.icon === "github" ? (
                        <FiGithub />
                      ) : l.icon === "document" ? (
                        <FiFileText />
                      ) : (
                        <FiExternalLink />
                      )}

                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Details */}
                <div>
                  <p className="text-sm text-neutral-700 whitespace-pre-line">
                    {PROJECTS[open].details}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROJECTS[open].tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery (optional) */}
                <div className="space-y-3">
                  {(PROJECTS[open].gallery ?? []).map((m) => (
                     <figure key={m.src} className="rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                          {m.type === "video" ? (
                            <video
                              controls
                              className="object-contain w-full h-full bg-black"
                              src={m.src}
                            />
                          ) : (
                            <Image
                              src={m.src}
                              alt={m.alt ?? PROJECTS[open].title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-contain bg-neutral-50"
                            />
                          )}
                        </div>
                        {m.caption && (
                          <figcaption className="px-3 py-2 text-xs text-neutral-600">{m.caption}</figcaption>
                        )}
                      </figure>
                  ))}
                </div>
              </div>
            </article>

            {/* Controls */}
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => setOpen((i) => (i! - 1 + PROJECTS.length) % PROJECTS.length)}
                className="rounded-md px-3 py-1.5 bg-white/10 text-white hover:bg-white/20 transition"
              >
                ← Prev
              </button>
              <button
                onClick={() => setOpen(null)}
                className="rounded-md px-3 py-1.5 bg-white/10 text-white hover:bg-white/20 transition"
              >
                Close
              </button>
              <button
                onClick={() => setOpen((i) => (i! + 1) % PROJECTS.length)}
                className="rounded-md px-3 py-1.5 bg-white/10 text-white hover:bg-white/20 transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
