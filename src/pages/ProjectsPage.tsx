import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { projects } from "../content/site";

export function ProjectsPage() {
  return (
    <Section eyebrow="Projects" title="AI 工作流提效项目">
      <p className="-mt-4 mb-8 max-w-3xl leading-7 text-slate-600">
        这些案例使用脱敏内容展示，重点说明问题拆解、AI 方案、工程约束和实际提效价值。源码涉及内网环境，不在公开网站提供。
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
