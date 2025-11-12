"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
  src: string;        
  alt?: string;
  caption?: string;   
};

const PHOTOS: Photo[] = [
  { src: "/photos/stella-halloween.jpeg", alt: "My dog in a halloween costume", caption: "Happy Halloween!" },
  { src: "/photos/alaska-moose.jpeg", alt: "Moose in Alaska", caption: "I find this amoosing" },
  { src: "/photos/keeley-sleeping.jpeg", alt: "Dog sleeping on couch", caption: "#MondayMood" },
  { src: "/photos/alaska-glaciers.jpeg", alt: "Selfie in front of glaciers", caption: "I was cold" },
  { src: "/photos/stella-leaf.jpeg", alt: "My dog in the leaves", caption: ""},
  { src: "/photos/la-marathon.jpeg", alt: "Two girls holding medals", caption: "Post LA marathon"},
  { src: "/photos/stella-silly.jpeg", alt: "My dog being crazy", caption: ""},
  { src: "/photos/slug.jpeg", alt: "Banana slug", caption: "Don't look up how banana slugs mate"},
  { src: "/photos/skiing.jpeg", alt: "Selgie while skiing", caption: "Haven't made it past the bunny slopes yet"},
  { src: "/photos/stella-puppy.jpeg", alt: "My dog as a puppy", caption: "#ThrowbackThursday"},
  { src: "/photos/seals.jpeg", alt: "Seals laying on a beach", caption: ""},
  { src: "/photos/stella-tounge-out.jpeg", alt: "Dog with tongue out", caption: ""}
  
];

export default function PhotosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Close modal on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight" && openIndex !== null) setOpenIndex((i) => (i! + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft" && openIndex !== null) setOpenIndex((i) => (i! - 1 + PHOTOS.length) % PHOTOS.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <main className="min-h-[calc(100vh-8rem)] px-6 py-10 text-neutral-800">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-900">
            Snapshots of My Life Offline
          </h1>
          <p> Mostly dog photos</p>
        </header>

        {/* Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setOpenIndex(i)}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white"
              aria-label={`Open photo: ${p.alt ?? p.src}`}
            >
              <div className="aspect-square relative">
                <Image
                  src={p.src}
                  alt={p.alt ?? "Photo"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  priority={i < 6} // pre-load first few
                />
              </div>
            </button>
          ))}
        </section>
      </div>

      {/* Modal / Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <figure className="rounded-2xl overflow-hidden bg-white">
              <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={PHOTOS[openIndex].src}
                  alt={PHOTOS[openIndex].alt ?? "Photo"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain bg-white"
                  priority
                />
              </div>
              {PHOTOS[openIndex].caption && PHOTOS[openIndex].caption.trim() !== "" && (
                <figcaption className="p-4 text-sm text-neutral-700">
                  {PHOTOS[openIndex].caption}
                </figcaption>
              )}
            </figure>

            {/* Controls */}
            <div className="mt-3 flex items-center justify-between text-neutral-200">
              <button
                onClick={() =>
                  setOpenIndex((i) => (i! - 1 + PHOTOS.length) % PHOTOS.length)
                }
                className="rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/20 transition"
              >
                ← Prev
              </button>
              <button
                onClick={() => setOpenIndex(null)}
                className="rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/20 transition"
              >
                Close
              </button>
              <button
                onClick={() =>
                  setOpenIndex((i) => (i! + 1) % PHOTOS.length)
                }
                className="rounded-md px-3 py-1.5 bg-white/10 hover:bg-white/20 transition"
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
