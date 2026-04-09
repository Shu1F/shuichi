import { projects } from "./projects";

export default function WorksPage() {
  return (
    <div className="flex flex-col gap-32 pt-24 pb-60">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col gap-6 max-w-[576px]"
        >
          <h2 className="text-lg tracking-[0.9px] uppercase text-black dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm leading-[25.2px] opacity-80 text-black dark:text-white">
            {project.description}
          </p>
          <div className="flex gap-6 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[1.1px] text-black dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.links && (
            <div className="flex gap-6">
              {Object.entries(project.links).map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[1.1px] underline text-black dark:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
