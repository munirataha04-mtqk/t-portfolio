import {
  FiCalendar,
  FiPlayCircle,
  FiImage,
  FiEdit2,
  FiBarChart2,
  FiZap,
  FiSearch,
  FiMessageCircle,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const skills = [
  { label: "Content Planning", Icon: FiCalendar },
  { label: "Video Editing", Icon: FiPlayCircle },
  { label: "Photo Editing", Icon: FiImage },
  { label: "Storytelling", Icon: FiEdit2 },
  { label: "Social Media Growth", Icon: FiBarChart2 },
  { label: "Creative Direction", Icon: FiZap },
  { label: "Trend Research", Icon: FiSearch },
  { label: "Communication", Icon: FiMessageCircle },
  { label: "Analytics", Icon: FiTrendingUp },
  { label: "Brand Collaboration", Icon: FiUsers },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-10"
    >
      {/* Subtle emerald glow */}
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-emerald-glow/[0.07] blur-3xl" />

      {/* Section heading */}
      <div className="relative flex items-center gap-4">
        <h2 className="shrink-0 font-display text-3xl text-cream sm:text-4xl">
          Skills &amp; Tools
        </h2>
        <span className="h-px flex-1 bg-emerald-line/70" />
      </div>

      <p className="relative mt-3 text-xs leading-6 text-cream/70 sm:text-sm">
        The tools I use to bring my ideas to life.
      </p>

      {/* Skills grid */}
      <div className="relative mt-7 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-8 xl:grid-cols-5">
        {skills.map(({ label, Icon }) => (
          <div
            key={label}
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-line/60 bg-[#062219]/80 text-xl text-cream transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-glow group-hover:bg-emerald-deep group-hover:text-emerald-glow group-hover:shadow-[0_0_22px_rgba(47,143,107,0.18)] sm:h-16 sm:w-16 sm:text-2xl">
              <Icon strokeWidth={1.4} />
            </div>

            <p className="mt-3 max-w-32 text-[10px] leading-4 text-cream/80 transition-colors duration-300 group-hover:text-cream sm:text-xs">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Handwritten decorative text */}
      <p className="relative mt-9 rotate-[-3deg] text-right font-script text-3xl leading-tight text-cream/80 sm:mt-10 sm:text-4xl">
        Good content needs both
        <br />
        creativity &amp; strategy ♡
      </p>
    </section>
  );
}