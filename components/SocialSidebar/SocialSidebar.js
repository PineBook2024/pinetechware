"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/pinetechware/",
    icon: FaFacebookF,
    color: "text-[#1877F2]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    icon: FaLinkedinIn,
    color: "text-[#0A66C2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pinebookwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    icon: FaInstagram,
    color: "text-[#E4405F]",
  },
];

export default function SocialSidebar() {
  return (
    <aside
      aria-label="Social media links"
      className="fixed left-0 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-1 md:flex"
    >
      {socialLinks.map(({ label, href, icon: Icon, color }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-11 items-center justify-center rounded-r-full bg-white text-lg shadow-[0_3px_12px_rgba(0,0,0,0.18)] transition-all duration-200 hover:w-12 hover:bg-[#f7fbff]"
        >
          <Icon className={color} aria-hidden="true" />
        </Link>
      ))}
    </aside>
  );
}
