
const links = ["Home", "About", "Portfolio", "Skills", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-emerald-line/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-[10px] text-cream/75 sm:px-8 md:flex-row md:gap-5">

        {/* Creator name */}
        <a
          href="#home"
          className="shrink-0 font-display text-base text-cream transition hover:text-emerald-glow"
        >
          Scarlet Tucker
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-emerald-glow"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <p className="whitespace-nowrap text-center text-[10px]">
          Content <span className="px-1">•</span>
          Creativity <span className="px-1">•</span>
          Community <span className="ml-1 text-cream">♡</span>
        </p>
      </div>
    </footer>
    );
}
