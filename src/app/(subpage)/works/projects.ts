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
    title: "WAI",
    description: "GDGOCハッカソンで開発した就活支援アプリです。",
    tags: ["Flutter", "Go(echo)", "wire", "Open API", "Firebase", "docker"],
    links: {
      site: "https://github.com/S-s-dev-team/wAI",
    },
  },
  {
    title: "Go Todo App",
    description:
      "OpenAPI のキャッチアップを目的として開発しました。Goのフレームワークは Gin を使用しており、ORMは Ent を使用しています。",
    tags: ["Go", "echo", "Open API", "ent", "docker"],
    links: {
      site: "https://github.com/Shu1F/openapi_go_todo",
    },
  },
  {
    title: "GUEST SHINJUKU",
    description:
      "飲食店のWEBサイト。アニメーションとデザインにこだわって作成しました。",
    tags: ["TypeScript", "Next.js", "React", "TailwindCSS"],
    links: {
      site: "https://www.guest-shinjuku.jp/",
    },
  },
];
