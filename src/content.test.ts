import { careerMetrics, certifications, experienceGroups, experiences, profile, projects } from "./content/site";
import { readFileSync } from "node:fs";

describe("site content model", () => {
  it("positions the candidate as a data engineering backed AI application engineer", () => {
    expect(profile.title).toContain("数据工程背景");
    expect(profile.title).toContain("AI 应用工程师");
    expect(profile.yearsOfExperience).toBe(11);
    expect(profile.primarySkills).toEqual(
      expect.arrayContaining(["SQL", "Python", "Shell", "数据仓库", "AI 工作流提效"])
    );
  });

  it("contains exactly three case-study-ready AI workflow projects", () => {
    expect(projects).toHaveLength(3);
    expect(projects.map((project) => project.title)).toEqual([
      "AI 脚本分析助手",
      "AI 数据问题排查",
      "个人工具箱 / AI 助手"
    ]);

    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.problem.length).toBeGreaterThan(20);
      expect(project.aiCapabilities.length).toBeGreaterThanOrEqual(2);
      expect(project.techStack.length).toBeGreaterThanOrEqual(3);
      expect(project.solution.length).toBeGreaterThan(20);
      expect(project.impact.length).toBeGreaterThan(10);
      expect(project.role.length).toBeGreaterThan(10);
      expect(project.screenshot).toMatch(/^\/screenshots\/.+\.svg$/);
    }
  });

  it("presents the toolbox as a broader assistant suite without duplicating the script analysis project", () => {
    const toolbox = projects.find((project) => project.slug === "personal-toolbox-ai-assistant");

    expect(toolbox).toBeDefined();
    expect(toolbox?.summary).toContain("数据开发");
    expect(toolbox?.summary).toContain("AI 对话助手");
    expect(toolbox?.screenshot).toBe("/screenshots/personal-toolbox-ai-assistant.svg");

    const screenshot = readFileSync(`public${toolbox?.screenshot}`, "utf8");
    expect(screenshot).toContain("AI 投产包检查");
    expect(screenshot).toContain("AI 助手");
    expect(screenshot).not.toContain("AI 脚本分析");
  });

  it("uses the correct work experience period", () => {
    expect(experiences[0].period).toBe("2015 - 2026");
  });

  it("summarizes sanitized career proof points for the home page", () => {
    expect(careerMetrics.map((metric) => metric.value)).toEqual(
      expect.arrayContaining(["11 年", "6 年+", "6000+", "1000+", "千亿级"])
    );
    expect(careerMetrics.some((metric) => metric.description.includes("重大变更零事故"))).toBe(true);
  });

  it("lists public-safe professional certifications", () => {
    expect(certifications).toEqual(
      expect.arrayContaining([
        "PMP 项目管理认证",
        "软考数据库系统工程师",
        "GaussDB(DWS) HCIP 高级工程师",
        "大数据工程师认证",
        "企业内部项目经理认证"
      ])
    );
    expect(certifications.every((certification) => certification.length <= 28)).toBe(true);
  });

  it("groups bank project experience without exposing client or internal system names", () => {
    expect(experienceGroups).toHaveLength(2);
    expect(experienceGroups[0].title).toBe("银行数据中台与迁移项目群");
    expect(experienceGroups[0].projects.map((project) => project.name)).toEqual(
      expect.arrayContaining(["零售数据集市建设", "数据仓库迁移", "报表系统迁移"])
    );
    expect(experienceGroups[1].title).toBe("历史数据平台与报表项目群");

    const publicText = JSON.stringify(experienceGroups);
    expect(publicText).not.toMatch(/\d{3}历史库/);
    expect(publicText).toContain("报表系统迁移");
  });
});
