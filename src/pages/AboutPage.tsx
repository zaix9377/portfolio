import { Award } from "lucide-react";
import { Section } from "../components/Section";
import { certifications, profile, skills } from "../content/site";

export function AboutPage() {
  return (
    <Section eyebrow="About" title="关于我">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-panel">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{profile.title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{profile.headline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.primarySkills.map((skill) => (
              <span key={skill} className="rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {profile.strengths.map((strength) => (
            <div key={strength} className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
              <p className="leading-7 text-slate-700">{strength}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-12 rounded-lg border border-slate-200 bg-white p-7 shadow-panel">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
            <Award size={20} aria-hidden="true" />
          </span>
          <h2 className="text-xl font-semibold text-slate-950">专业认证</h2>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {certifications.map((certification) => (
            <span key={certification} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
              {certification}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {skills.map((skillGroup) => (
          <section key={skillGroup.group} className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">{skillGroup.group}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {skillGroup.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
