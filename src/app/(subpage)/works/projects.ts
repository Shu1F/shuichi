export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    site?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    title: "GUEST SHINJUKU",
    description: "...",
    tags: ["TypeScript", "Next.js", "React", "TailwindCSS"],
    links: {
      site: "https://www.guest-shinjuku.jp/",
    },
  },
];
