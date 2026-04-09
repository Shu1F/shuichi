import { skills } from "./skills";

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-24 pt-24 pb-60">
      {skills.map((section) => (
        <section key={section.category} className="flex flex-col gap-8">
          <h2 className="text-sm tracking-[1.4px] uppercase text-black dark:text-white">
            {section.category}
          </h2>
          <ul className="flex flex-col gap-4">
            {section.items.map((item) => (
              <li
                key={item}
                className="text-sm tracking-[0.7px] uppercase text-black dark:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
