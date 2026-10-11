import SocialIcons from "./SocialIcons";
import { Heart, Sparkle } from "./Doodles";
import { FiDownload, FiEye } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-emerald-line/60"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-emerald-glow/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-glow/[0.08] blur-[100px]" />

      {/* Decorative doodles */}
      <Heart className="absolute left-[29%] top-20 hidden h-6 w-6 text-cream/90 lg:block" />
      <Sparkle className="absolute right-[36%] top-8 hidden h-8 w-8 text-cream/80 lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-7 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.15fr_0.85fr] lg:gap-8 lg:px-12 lg:py-3 xl:px-16">
        {/* LEFT: Intro and CV */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="text-[9px] font-medium tracking-[0.22em] text-cream/90 sm:text-[14px]">
            CONTENT CREATOR
          </p>
          <h1 className="mt-3 whitespace-nowrap font-display text-4xl leading-[0.92] text-cream sm:text-5xl lg:text-4xl xl:text-5xl">
            Scarlet
            <br />
            Tucker
          </h1>

          <p className="mt-3 whitespace-nowrap font-script gap-2 text-3xl leading-[0.99] text-cream/95 sm:text-4xl">
            Turning Ideas
            <br />
            into Stories <span className="font-sans text-lg">♡</span>
          </p>

          <p className="mx-auto mt-4 max-w-sm text-[10px] leading-5 text-cream/85 sm:text-[14px] sm:leading-5 lg:mx-0">
            I create aesthetic, relatable and engaging content that connects
            with people and brings ideas to life.
          </p>

          <div className="mt-3 flex justify-center lg:justify-start">
            <SocialIcons />
          </div>

          {/* CV buttons with white border */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-4 py-2 text-[10px] text-cream transition-all duration-300 hover:border-emerald-glow hover:bg-emerald-glow/15 sm:text-xs"
            >
              <FiEye className="h-3.5 w-3.5" />
              View CV
            </a>
            <a
              href="/cv.pdf"
              download="CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-4 py-2 text-[10px] text-cream transition-all duration-300 hover:border-emerald-glow hover:bg-emerald-glow/15 sm:text-xs"
            >
              <FiDownload className="h-3.5 w-3.5" />
              Download CV
            </a>
          </div>
        </div>

        {/* CENTER: Main photograph */}
        <div className="order-1 mx-auto w-full max-w-[440px] lg:order-2">
          <div
            className="relative h-[280px] overflow-hidden rounded-[85px_85px_20px_20px] border border-emerald-line/60 bg-cover bg-center shadow-[0_0_40px_rgba(57,137,103,0.12)] sm:h-[350px] lg:h-[320px] xl:h-[350px]"
            style={{
              backgroundImage:
                "url('/images/hero-main.jpg'), linear-gradient(135deg, #1f5e49, #0a2a1f)",
            }}
          />
        </div>

        {/* RIGHT: Handwritten phrase and Polaroid */}
        <div className="order-3 flex flex-col items-center justify-center gap-5 sm:flex-row lg:flex-col lg:gap-5">
          <p className="-rotate-6 font-script text-3xl leading-[0.95] text-cream/90 sm:text-4xl lg:self-start">
            Create
            <br />
            Share
            <br />
            Inspire ♡
          </p>

          <div className="relative w-44 rotate-[4deg] border border-[#e6dac2] bg-[#f3ead7] p-2 pb-6 shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:rotate-0 sm:w-48 lg:w-52">
            {/* Decorative tape */}
            <div className="absolute -top-3 right-1 z-10 h-5 w-14 rotate-6 border border-white/10 bg-[#9ca98a]/70" />

            <div
              className="h-48 border border-black/10 bg-cover bg-center sm:h-52 lg:h-52"
              style={{
                backgroundImage:
                  "url('/images/hero-portrait.jpg'), linear-gradient(160deg, #2f8f6b, #0a2a1f)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}