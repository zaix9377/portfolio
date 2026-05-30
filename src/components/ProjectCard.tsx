import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
      <div className="border-b border-slate-200 bg-slate-100">
        <img className="aspect-[16/9] w-full object-cover" src={project.screenshot} alt={`${project.title} 脱敏界面示意`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.aiCapabilities.slice(0, 3).map((capability) => (
            <span key={capability} className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-800">
              {capability}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-slate-950">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-cyan-700"
          to={`/projects/${project.slug}`}
        >
          查看案例
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
