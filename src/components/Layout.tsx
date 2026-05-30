import { NavLink } from "react-router-dom";
import { DatabaseZap } from "lucide-react";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于我" },
  { to: "/experience", label: "工作经历" },
  { to: "/projects", label: "项目" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-950">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
              <DatabaseZap size={19} aria-hidden="true" />
            </span>
            <span>AI Portfolio</span>
          </NavLink>
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-3 py-1.5 transition",
                    isActive ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>数据工程背景的 AI 应用工程师作品集</p>
          <p>展示内容已按求职作品集场景脱敏处理</p>
        </div>
      </footer>
    </div>
  );
}
