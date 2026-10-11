import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/scarlettucker",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@scarlettucker",
    Icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@scarlettucker",
    Icon: FaYoutube,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    Icon: FaPinterestP,
  },
  {
    label: "X",
    href: "https://x.com",
    Icon: FaXTwitter,
  },
];

export default function SocialIcons() {
  return (
    <div className="mt-6 flex items-center justify-center gap-4 sm:gap-5 lg:justify-start lg:gap-6">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-line/40 bg-emerald-deep/40 text-base text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-glow/80 hover:bg-emerald-glow/10 hover:text-emerald-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-glow sm:h-10 sm:w-10 sm:text-lg"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}