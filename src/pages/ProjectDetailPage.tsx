import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/site";
import { publicAssetUrl } from "../utils/assetUrl";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-950">项目不存在</h1>
        <p className="mt-4 text-slate-600">这个项目地址没有匹配到公开案例。</p>
        <Link className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white" to="/projects">
          返回项目列表
        </Link>
      </section>
    );
  }

  return (
    <article>
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200" to="/projects">
              <ArrowLeft size={16} aria-hidden="true" />
              返回项目列表
            </Link>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <img className="aspect-[16/10] w-full rounded-md object-cover" src={publicAssetUrl(project.screenshot)} alt={`${project.title} 脱敏界面示意`} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <DetailBlock title="业务问题" body={project.problem} />
        <DetailBlock title="AI 方案" body={project.solution} />
        <DetailBlock title="技术实现">
          <ul className="space-y-3">
            {project.implementation.map((item) => (
              <li key={item} className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </DetailBlock>
        <DetailBlock title="效果与证据" body={project.impact} />
        <DetailBlock title="我的职责" body={project.role} />
      </section>
    </article>
  );
}

function DetailBlock({ title, body, children }: { title: string; body?: string; children?: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-panel">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      {body ? <p className="mt-4 leading-8 text-slate-600">{body}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
