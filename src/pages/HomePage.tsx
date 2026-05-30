import { ArrowRight, Bot, ChartNoAxesCombined, GitBranch, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { careerMetrics, profile, projects, skills } from "../content/site";

const proofItems = [
  { icon: ChartNoAxesCombined, label: "11 年数据工程经验", text: "理解指标口径、数据链路和业务协作成本。" },
  { icon: Bot, label: "AI 工作流提效", text: "把模型能力放进可审核、可复用的业务流程。" },
  { icon: GitBranch, label: "脚本与自动化", text: "用 Python、Shell、SQL 降低重复操作。" },
  { icon: ShieldCheck, label: "可信交付", text: "重视边界、脱敏、人工确认和结果校验。" }
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.16)_1px,transparent_1px),linear-gradient(rgba(8,145,178,0.14)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-65px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              SQL / Python / Shell / LLM Workflow
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{profile.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950" to="/projects">
                查看项目
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white" to="/experience">
                查看经历
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-medium text-slate-300">Capability Map</span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-200">AI + Data</span>
            </div>
            <div className="space-y-4">
              {proofItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 rounded-lg border border-white/10 bg-slate-900/70 p-4">
                    <Icon className="mt-1 shrink-0 text-cyan-300" size={20} aria-hidden="true" />
                    <div>
                      <h2 className="text-sm font-semibold text-white">{item.label}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Career Proof" title="可验证的项目交付背景">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
              <h2 className="mt-3 text-base font-semibold text-slate-950">{metric.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected Projects" title="3 个 AI 工作流提效案例">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Skill Stack" title="能力结构">
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.group} className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
              <h3 className="text-lg font-semibold text-slate-950">{skillGroup.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
