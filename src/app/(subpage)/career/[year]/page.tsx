import Link from "next/link";
import { notFound } from "next/navigation";
import CareerEventLink from "../CareerEventLink";
import { careerYears, formatCareerPeriod, getCareerYear } from "../career";

export function generateStaticParams() {
  return careerYears.map((item) => ({
    year: item.year,
  }));
}

export default async function CareerYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const careerYear = getCareerYear(year);

  if (!careerYear) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-14 pt-24 pb-60">
      <header className="flex flex-col gap-5">
        <p className="text-[11px] uppercase tracking-[1.1px] text-black/60 dark:text-white/60">
          Career
        </p>
        <h1 className="text-3xl leading-none tracking-[1.5px] text-black dark:text-white">
          {careerYear.year}
        </h1>
        <Link
          href="/career"
          className="w-fit text-[11px] uppercase tracking-[1.1px] text-black underline underline-offset-4 dark:text-white"
        >
          Back to career
        </Link>
      </header>

      <ol className="relative flex flex-col gap-12">
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-black/15 dark:bg-white/20" />
        {careerYear.details.map((detail) => (
          <li
            key={`${formatCareerPeriod(detail.period)}-${detail.title}`}
            className="relative pl-10"
          >
            <span className="absolute top-[5px] left-0 size-[15px] rounded-full border border-black bg-white dark:border-white dark:bg-black" />
            <CareerEventLink
              link={detail.link}
              className={`group/event block outline-none${
                detail.link
                  ? " transition-opacity duration-300 hover:opacity-60 focus-visible:opacity-60"
                  : ""
              }`}
            >
              <article className="flex flex-col gap-4">
                <p className="text-[11px] uppercase tracking-[1.1px] text-black/60 dark:text-white/60">
                  {formatCareerPeriod(detail.period)}
                </p>
                <div className="flex flex-col gap-3">
                  <h2 className="text-base leading-[28px] tracking-[0.4px] text-black dark:text-white">
                    {detail.title}
                  </h2>
                  {detail.description && (
                    <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
                      {detail.description}
                    </p>
                  )}
                </div>
                {detail.labels && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {detail.labels.map((label) => (
                      <span
                        key={label}
                        className="text-[11px] uppercase tracking-[1.1px] text-black/70 dark:text-white/70"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </CareerEventLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
