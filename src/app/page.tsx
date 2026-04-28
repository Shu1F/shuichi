"use client";

import Link from "next/link";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/works" },
  { label: "SKILLS", href: "/skills" },
  {
    label: "RESUME",
    href: "https://shuichi-fujiike.notion.site/resume",
    external: true,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <nav className="flex flex-col items-center">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm uppercase tracking-[1.4px] text-black dark:text-white animate-fade-up${index > 0 ? " mt-24" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
