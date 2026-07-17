import Link from "next/link";
import type { ReactNode } from "react";
import type { CareerLink } from "./career";

type CareerEventLinkProps = {
  children: ReactNode;
  className: string;
  link?: CareerLink;
};

export default function CareerEventLink({
  children,
  className,
  link,
}: CareerEventLinkProps) {
  if (!link) {
    return <div className={className}>{children}</div>;
  }

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {children}
    </Link>
  );
}
