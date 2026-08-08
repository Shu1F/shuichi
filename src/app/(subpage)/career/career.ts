export type CareerPeriod = {
  start: string;
  end?: string;
};

export type CareerLink = {
  href: string;
  external?: boolean;
};

export type CareerDetail = {
  period: CareerPeriod;
  title: string;
  description?: string;
  showOnOverview: boolean;
  labels?: string[];
  link?: CareerLink;
};

export type CareerYear = {
  year: string;
  details: CareerDetail[];
};

export const careerYears: CareerYear[] = [
  {
    year: "2026",
    details: [
      {
        period: { start: "3月" },
        title: "GDGoC Japan Hackathon 2026",
        showOnOverview: true,
        labels: ["Hackathon", "Flutter", "Go"],
        link: {
          href: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-aizu-fukushima-japan-presents-gdgoc-japan-hackathon/cohost-gdg-on-campus-tokyo-metropolitan-university-tokyo-japan/",
          external: true,
        },
      },
      {
        period: { start: "4月" },
        title: "株式会社ジーニー",
        description: "2Daysインターン",
        showOnOverview: true,
        labels: ["React", "Go"],
        link: {
          href: "https://geniee.co.jp/",
          external: true,
        },
      },
      {
        period: { start: "8月" },
        title: "Sansan株式会社",
        description: "長期就業型インターン",
        showOnOverview: true,
        labels: ["Typescript", "NestJS"],
        link: {
          href: "https://jp.corp-sansan.com/",
          external: true,
        },
      },
    ],
  },
  {
    year: "2025",
    details: [
      {
        period: { start: "2月" },
        title: "42 Tokyo Piscine",
        showOnOverview: false,
        labels: ["C"],
        link: {
          href: "https://42tokyo.jp/requirements/",
          external: true,
        },
      },
      {
        period: { start: "4月", end: "11月" },
        title: "42 Tokyo",
        showOnOverview: true,
        labels: ["C"],
        link: {
          href: "https://42tokyo.jp/",
          external: true,
        },
      },
      {
        period: { start: "6月", end: "2026年3月" },
        title: "株式会社ドクターズプライム",
        description: "長期インターン",
        showOnOverview: true,
        labels: ["Typescript", "React", "Next.js", "Go", "GraphQL"],
        link: {
          href: "https://drsprime.com/",
          external: true,
        },
      },
    ],
  },
  {
    year: "2024",
    details: [
      {
        period: { start: "4月" },
        title: "工学院大学 編入学",
        showOnOverview: true,
        labels: ["Education"],
        link: {
          href: "https://www.kogakuin.ac.jp/",
          external: true,
        },
      },
      {
        period: { start: "12月", end: "2025年5月" },
        title: "株式会社micado インターン",
        showOnOverview: true,
        labels: ["Internship", "PHP", "WordPress"],
        link: {
          href: "https://micado.jp/",
          external: true,
        },
      },
    ],
  },
  {
    year: "2023",
    details: [
      {
        period: { start: "1月" },
        title: "桜美林大学 成績優秀者奨学金",
        description: "GPA 3.78を修め、成績優秀者奨学金を獲得。",
        showOnOverview: true,
        labels: ["Education", "Scholarship"],
        link: {
          href: "https://www.obirin.ac.jp/",
          external: true,
        },
      },
    ],
  },
  {
    year: "2022",
    details: [
      {
        period: { start: "4月" },
        title: "桜美林大学 入学",
        showOnOverview: true,
        labels: ["Education"],
        link: {
          href: "https://www.obirin.ac.jp/",
          external: true,
        },
      },
    ],
  },
];

export function getCareerYear(year: string) {
  return careerYears.find((careerYear) => careerYear.year === year);
}

export function formatCareerPeriod(period: CareerPeriod) {
  return period.end ? `${period.start} - ${period.end}` : period.start;
}
