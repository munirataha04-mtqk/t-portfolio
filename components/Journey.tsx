// Edit these numbers any time
const stats = [
  { value: "75K+", label: "Total Followers" },
  { value: "1.8M+", label: "Total Views" },
  { value: "250+", label: "Pieces of Content" },
  { value: "100%", label: "Passion" },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden border-b border-emerald-line/40 px-6 py-10 sm:px-8 sm:py-12 lg:border-b-0 lg:border-r lg:px-10">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-emerald-glow/[0.08] blur-3xl" />

      {/* Heading */}
      <div className="relative flex items-center gap-4">
        <h2 className="shrink-0 font-display text-3xl text-cream sm:text-4xl">
          My Journey
        </h2>
        <span className="h-px flex-1 bg-emerald-line/70" />
      </div>

      <p className="relative mt-3 text-xs leading-6 text-cream/70 sm:text-sm">
        Numbers tell a small part of the story.
      </p>

      {/* Statistics */}
      <div className="relative mt-7 grid grid-cols-2 gap-3 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group rounded-lg border border-emerald-line/50 bg-[#062219]/70 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/80 hover:bg-emerald-deep/80 sm:py-6"
          >
            <p className="font-display text-3xl leading-none text-cream transition-colors duration-300 group-hover:text-emerald-glow sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-3 text-[10px] leading-4 text-cream/65 sm:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Handwritten closing line */}
      <p className="relative mt-9 -rotate-3 font-script text-3xl leading-tight text-cream/80 sm:mt-10 sm:text-4xl">
        Grateful for every view,
        <br />
        like and comment ♡
      </p>
    </section>
  );
}