"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageName = pathname.slice(1).toUpperCase();

  return (
    <div className="flex flex-1 flex-col px-16 max-w-screen-sm mx-auto w-full">
      <nav className="py-12">
        <Link
          href="/"
          className="text-sm uppercase tracking-[1.4px] text-black dark:text-white"
        >
          ← {pageName}
        </Link>
      </nav>
      <div className="animate-fade-up">{children}</div>
    </div>
  );
}
