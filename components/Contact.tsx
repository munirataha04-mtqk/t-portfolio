import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const contacts = [
  {
    text: "tasneemghatila@gmail.com",
    href: "mailto:tasneemghatila@gmail.com",
    Icon: FiMail,
  },
  {
    text: "@tasneem.ghatila",
    href: "https://instagram.com/tasneem.ghatila",
    Icon: FaInstagram,
  },
  {
    text: "@tasneem.ghatila",
    href: "https://tiktok.com/@tasneem.ghatila",
    Icon: FaTiktok,
  },
  {
    text: "@tasneem.ghatila",
    href: "https://youtube.com/@tasneem.ghatila",
    Icon: FaYoutube,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-emerald-line/60 px-6 py-6 lg:border-l lg:px-7"
    >
      {/* Heading */}
      <h2 className="font-display text-[25px] leading-tight text-cream">
        Let&apos;s Work Together
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-[250px] text-[12px] leading-[1.7] text-cream/85">
        Have a project, collaboration or just want to say hi?
        I&apos;d love to hear from you!
      </p>

      {/* Contact button */}
      <a
        href="mailto:tasneemghatila@gmail.com"
        className="mt-4 inline-flex items-center gap-3 rounded-full bg-emerald-glow/90 px-5 py-2.5 text-[13px] text-cream transition duration-300 hover:bg-emerald-glow hover:shadow-lg hover:shadow-emerald-glow/20"
      >
        Get in Touch
        <FiArrowRight size={16} />
      </a>

      {/* Contact links */}
      <ul className="mt-5 space-y-2.5">
        {contacts.map(({ text, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 text-[11px] leading-5 text-cream/90 transition hover:text-emerald-glow"
            >
              <Icon
                size={16}
                className="shrink-0 text-cream transition group-hover:text-emerald-glow"
                aria-hidden="true"
              />
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Handwritten decoration */}
      <p className="ml-auto mt-4 max-w-[190px] rotate-[-6deg] text-right font-script text-[23px] leading-tight text-cream/80">
        Let&apos;s create
        <br />
        something amazing ♡
        <span className="ml-auto mt-1 block h-px w-20 rotate-[-8deg] bg-emerald-line" />
      </p>
    </section>
  );
}
