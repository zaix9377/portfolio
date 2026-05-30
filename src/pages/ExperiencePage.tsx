import { BriefcaseBusiness } from "lucide-react";
import { Section } from "../components/Section";
import { experienceGroups, experiences } from "../content/site";

export function ExperiencePage() {
  return (
    <Section eyebrow="Experience" title="工作经历">
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article key={experience.period} className="rounded-lg border border-slate-200 bg-white p-7 shadow-panel">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-cyan-700">{experience.period}</p>
                  <h1 className="mt-1 text-2xl font-semibold text-slate-950">{experience.role}</h1>
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-4xl leading-8 text-slate-600">{experience.description}</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {experienceGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-panel">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-700">{group.period}</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">{group.title}</h2>
              </div>
            </div>
            <p className="mt-4 max-w-5xl leading-8 text-slate-600">{group.summary}</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {group.projects.map((project) => (
                <section key={project.name} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{project.period}</p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-950">{project.name}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {project.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-sm leading-6 text-slate-600">
                        - {responsibility}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
