export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "- FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Dart / Flutter"],
  },
  {
    category: "- BACKEND",
    items: ["Go", "PostgreSQL", "GraphQL"],
  },
  {
    category: "- TOOLS",
    items: ["Docker"],
  },
];
