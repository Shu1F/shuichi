"use client";

import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="flex items-center justify-end px-16 py-12 max-w-screen-sm mx-auto w-full">
      <button
        type="button"
        onClick={toggleTheme}
        className="cursor-pointer text-sm uppercase tracking-[1.4px] text-black dark:text-white"
      >
        Light / Dark
      </button>
    </header>
  );
}
