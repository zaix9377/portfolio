import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]} future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </MemoryRouter>
  );
}

describe("portfolio routes", () => {
  it("renders the home page with the candidate positioning and project entries", () => {
    renderRoute("/");

    expect(screen.getByRole("heading", { name: /数据工程背景的 AI 应用工程师/ })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /查看案例/ })).toHaveLength(3);
    expect(screen.getByText("6000+")).toBeInTheDocument();
  });

  it("renders a project detail case study by slug", () => {
    renderRoute("/projects/ai-script-analysis-assistant");

    expect(screen.getByRole("heading", { name: /AI 脚本分析助手/ })).toBeInTheDocument();
    expect(screen.getByText("业务问题")).toBeInTheDocument();
    expect(screen.getByText("AI 方案")).toBeInTheDocument();
    expect(screen.getByText("技术实现")).toBeInTheDocument();
    expect(screen.getByText("效果与证据")).toBeInTheDocument();
    expect(screen.getByText("我的职责")).toBeInTheDocument();
  });

  it("shows a not found state for an unknown project slug", () => {
    renderRoute("/projects/not-real");

    expect(screen.getByRole("heading", { name: "项目不存在" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "返回项目列表" })).toHaveAttribute("href", "/projects");
  });

  it("renders sanitized certifications on the about page", () => {
    renderRoute("/about");

    expect(screen.getByText("专业认证")).toBeInTheDocument();
    expect(screen.getByText("企业内部项目经理认证")).toBeInTheDocument();
  });

  it("renders grouped bank project experience", () => {
    renderRoute("/experience");

    expect(screen.getByText("银行数据中台与迁移项目群")).toBeInTheDocument();
    expect(screen.getByText("历史数据平台与报表项目群")).toBeInTheDocument();
    expect(screen.getByText("报表系统迁移")).toBeInTheDocument();
  });
});
