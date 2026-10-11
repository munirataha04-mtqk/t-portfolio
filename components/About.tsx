import { FiMapPin, FiHeart, FiGlobe } from "react-icons/fi";

const details = [
  { Icon: FiMapPin, text: "Karachi, Pakistan" },
  { Icon: FiHeart, text: "Lifestyle | Aesthetic | Daily Life" },
  { Icon: FiGlobe, text: "Languages    English | Urdu" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-emerald-line/60 px-6 py-6 lg:border-b-0 lg:border-r lg:px-8"
    >
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-display text-[28px] leading-tight text-cream">
          About Me
        </h2>
        <span className="h-px flex-1 bg-emerald-line" />
      </div>

      {/* Content */}
      <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
        {/* About text */}
        <div className="min-w-0">
          <div className="space-y-3 text-[16px] leading-[1.65] text-cream/85">
            <p>
              Hi, I&apos;m Scarlet Tucker, a content creator with
              a passion for storytelling, aesthetics and meaningful
              content. I love turning simple moments into beautiful
              stories — whether it&apos;s through short videos,
              photos, or lifestyle posts.
            </p>

            <p>             

              My goal is to create content that feels real, adds
              value, and inspires others. I&apos;m always exploring
              new ideas, learning new trends, and finding creative
              ways to share my world.
            </p>
          </div>

          {/* Handwritten decoration */}
          <p className="mt-5 -rotate-6 font-script text-[27px] leading-tight text-cream/90">
            Same girl...
            <br />
            <span className="ml-8">bigger dreams ♡</span>
          </p>
        </div>

        {/* Photo and details */}
        <div className="min-w-0 sm:pt-0">
          {/* Polaroid photo */}
          <div className="ml-1 w-full max-w-[200px] -rotate-[5deg] border border-stone-300 bg-[#f3ead7] p-[6px] pb-5 shadow-xl">
            <div
              className="aspect-[1.22/1] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/about.jpg'), linear-gradient(160deg, #2f8f6b, #0a2a1f)",
              }}
              role="img"
              aria-label="Lifestyle photograph"
            />
          </div>

          {/* Creator details */}
          <ul className="mt-5 space-y-3 text-[11px] leading-5 text-cream/90">
            {details.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon
                  size={15}
                  className="mt-[2px] shrink-0 text-cream"
                  aria-hidden="true"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Handwritten decorative text */}
      <p className="relative mt-9 rotate-[-3deg] text-right font-script text-3xl leading-tight text-cream/80 sm:mt-10 sm:text-4xl">
        “Turn the quiet moments into 
         <br />
         stories worth scrolling for.”
      </p>
    </section>
    );

}
