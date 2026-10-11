"use client";

import { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

const filters = ["All", "Reels", "Photos", "Lifestyle", "Aesthetic", "Vlogs"];

// Edit this list later to change titles, views, categories, and images
const works = [
  { id: 1, title: "Cozy desk morning", views: "48.2K", categories: ["Reels", "Lifestyle"], image: "/images/work-1.jpg" },
  { id: 2, title: "Matcha and notes", views: "76.4K", categories: ["Aesthetic", "Photos"], image: "/images/work-2.jpg" },
  { id: 3, title: "City sunset", views: "52.1K", categories: ["Photos", "Vlogs"], image: "/images/work-3.jpg" },
  { id: 4, title: "Soft bedroom light", views: "39.7K", categories: ["Lifestyle", "Aesthetic"], image: "/images/work-4.jpg" },
  { id: 5, title: "Fresh tulips", views: "41.3K", categories: ["Photos", "Aesthetic"], image: "/images/work-5.jpg" },
  { id: 6, title: "Night city lights", views: "63.5K", categories: ["Reels", "Vlogs"], image: "/images/work-6.jpg" },
  { id: 7, title: "Work from home", views: "28.9K", categories: ["Vlogs", "Lifestyle"], image: "/images/work-7.jpg" },
  { id: 8, title: "Window reading nook", views: "35.6K", categories: ["Aesthetic", "Reels"], image: "/images/work-8.jpg" },
];

function bg(image: string) {
  return {
    backgroundImage: `url('${image}'), linear-gradient(160deg, #2f8f6b, #0a2a1f)`,
  };
}

export default function Work() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof works)[number] | null>(null);

  const visible =
    active === "All"
      ? works
      : works.filter((work) => work.categories.includes(active));

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-b border-emerald-line/40 px-6 py-10 sm:px-8 sm:py-12 lg:border-b-0 lg:border-r lg:px-10"
    >
      {/* Subtle emerald glow */}
      <div className="pointer-events-none absolute -right-20 top-20 h-56 w-56 rounded-full bg-emerald-glow/[0.07] blur-3xl" />

      {/* Heading */}
      <div className="relative flex items-center gap-4">
        <h2 className="shrink-0 font-display text-3xl text-cream sm:text-4xl">
          My Work
        </h2>
        <span className="h-px flex-1 bg-emerald-line/70" />
      </div>

      <p className="relative mt-3 text-xs leading-6 text-cream/70 sm:text-sm">
        A glimpse of what I create.
      </p>

      {/* Category filters */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-full border px-3.5 py-1.5 text-[10px] transition-all duration-300 sm:px-4 sm:text-xs ${
              active === filter
                ? "border-emerald-glow bg-emerald-glow/20 text-cream shadow-[0_0_15px_rgba(47,143,107,0.12)]"
                : "border-emerald-line/60 bg-[#062219]/40 text-cream/75 hover:border-emerald-glow/80 hover:text-cream"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Work gallery */}
      <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
        {visible.map((work) => (
          <button
            key={work.id}
            onClick={() => setSelected(work)}
            aria-label={`View ${work.title}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-emerald-line/50 bg-cover bg-center text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/80 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
            style={bg(work.image)}
          >
            {/* Image overlay */}
            <span className="absolute inset-0 bg-gradient-to-t from-[#04150f]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Play icon */}
            <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-cream/30 bg-[#04150f]/50 text-cream opacity-80 backdrop-blur-sm transition group-hover:border-emerald-glow group-hover:bg-emerald-glow/80">
              <FiPlay className="h-3 w-3 fill-current" />
            </span>

            {/* Title and views */}
            <span className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
              <span className="block text-[10px] font-medium leading-4 text-cream sm:text-xs">
                {work.title}
              </span>
              <span className="mt-1 block text-[9px] text-cream/65 sm:text-[10px]">
                {work.views} views
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Image detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-title"
            className="w-full max-w-sm rounded-xl border border-emerald-line/70 bg-[#062219] p-4 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                Featured work
              </p>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="flex h-8 w-8 items-center justify-center rounded-full text-cream/80 transition hover:bg-emerald-glow/15 hover:text-emerald-glow"
              >
                <FiX size={20} />
              </button>
            </div>

            <div
              className="mt-3 aspect-[4/5] max-h-[55vh] rounded-lg border border-emerald-line/40 bg-cover bg-center"
              style={bg(selected.image)}
            />

            <h3
              id="work-title"
              className="mt-4 font-display text-2xl text-cream"
            >
              {selected.title}
            </h3>

            <p className="mt-1 text-xs text-cream/65">
              {selected.views} views
              <span className="mx-2 text-emerald-line">•</span>
              {selected.categories.join(" · ")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}