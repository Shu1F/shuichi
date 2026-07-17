import Link from "next/link";
import CareerEventLink from "./CareerEventLink";
import { type CareerDetail, careerYears, formatCareerPeriod } from "./career";

function OverviewEvent({ detail }: { detail: CareerDetail }) {
  return (
    <CareerEventLink
      link={detail.link}
      className={`group/event flex flex-col gap-2 outline-none${
        detail.link
          ? " transition-opacity duration-300 hover:opacity-60 focus-visible:opacity-60"
          : ""
      }`}
    >
      <p className="text-sm leading-[23.8px]">
        <span className="mr-3 text-[11px] tracking-[0.55px] opacity-60">
          {formatCareerPeriod(detail.period)}
        </span>
        <span>{detail.title}</span>
      </p>
      {detail.labels && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {detail.labels.map((label) => (
            <span
              key={label}
              className="text-[10px] uppercase tracking-[1px] opacity-55"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </CareerEventLink>
  );
}

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-14 pt-24 pb-60">
      <header className="flex flex-col gap-4">
        <h1 className="text-sm uppercase tracking-[1.4px] text-black dark:text-white">
          Career
        </h1>
        <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
          学歴と開発経験の記録。
        </p>
      </header>

      <ol className="relative -mx-6 sm:mx-0">
        <span className="absolute top-3 bottom-3 left-[62px] w-px bg-black/15 dark:bg-white/20 sm:left-[94px]" />
        {careerYears.map((item, index) => {
          const overviewDetails = item.details.filter(
            (detail) => detail.showOnOverview,
          );

          return (
            <li
              key={item.year}
              className={`relative grid grid-cols-[52px_20px_1fr] gap-3 text-black dark:text-white sm:grid-cols-[80px_28px_1fr] sm:gap-6${
                index === 0 ? "" : " pt-6"
              }`}
            >
              <time className="pt-0.5 text-lg leading-none tracking-[0.9px]">
                {item.year}
              </time>
              <div className="relative flex justify-center pt-1">
                <span className="size-3 rounded-full border border-black bg-white dark:border-white dark:bg-black" />
              </div>
              <div
                className={`flex flex-col gap-4${
                  index === careerYears.length - 1
                    ? ""
                    : " border-b border-black/10 pb-7 dark:border-white/15"
                }`}
              >
                {overviewDetails.map((detail) => (
                  <OverviewEvent key={detail.title} detail={detail} />
                ))}
                <Link
                  href={`/career/${item.year}`}
                  className="mt-1 w-fit self-end text-[11px] tracking-[0.55px] underline underline-offset-4 transition-opacity duration-300 hover:opacity-60 focus-visible:opacity-60"
                >
                  {item.year}年の詳細を見る
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
