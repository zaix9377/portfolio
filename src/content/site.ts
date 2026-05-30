export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  aiCapabilities: string[];
  techStack: string[];
  solution: string;
  implementation: string[];
  impact: string;
  role: string;
  screenshot: string;
};

export type CareerMetric = {
  value: string;
  label: string;
  description: string;
};

export type ExperienceProject = {
  name: string;
  period: string;
  technologies: string[];
  summary: string;
  responsibilities: string[];
};

export type ExperienceGroup = {
  title: string;
  period: string;
  summary: string;
  projects: ExperienceProject[];
};

export const profile = {
  name: "AI 应用工程师候选人",
  title: "数据工程背景的 AI 应用工程师",
  yearsOfExperience: 11,
  headline:
    "11 年数据仓库、SQL、Python、Shell 与流程自动化经验，正在把 LLM 能力落到数据分析、脚本审查、问题排查和投产检查等真实工作流场景。",
  primarySkills: ["SQL", "Python", "Shell", "数据仓库", "AI 工作流提效"],
  strengths: [
    "长期处理数据口径、调度链路、报表交付和业务协作，理解企业数据系统的真实复杂度。",
    "能把 AI 能力拆成可落地的工程模块：输入约束、预设提示词、结果结构化、报告生成和人工确认。",
    "更关注可维护、可解释、可复用的提效工具，而不是只做一次性的模型调用演示。"
  ]
};

export const careerMetrics: CareerMetric[] = [
  {
    value: "11 年",
    label: "数据工程经验",
    description: "覆盖数据仓库、ETL、批量调度、报表支撑和生产运维。"
  },
  {
    value: "6 年+",
    label: "银行数据中台",
    description: "长期参与核心数据平台建设、迁移和稳定运行保障。"
  },
  {
    value: "6000+",
    label: "批量脚本迁移",
    description: "参与老数据仓库批量 ETL、调度和验证迁移。"
  },
  {
    value: "1000+",
    label: "报表迁移验证",
    description: "推进报表加工链路迁移、数据一致性校验和单轨切换。"
  },
  {
    value: "千亿级",
    label: "历史明细数据",
    description: "参与历史交易明细数据整合、迁移、查询和性能优化。"
  },
  {
    value: "零事故",
    label: "重大变更保障",
    description: "多次重大变更零事故，重视计划、验证、回退和生产稳定性。"
  }
];

export const certifications = [
  "PMP 项目管理认证",
  "软考数据库系统工程师",
  "GaussDB(DWS) HCIP 高级工程师",
  "大数据工程师认证",
  "企业内部项目经理认证"
];

export const skills = [
  {
    group: "数据工程",
    items: ["数据仓库建模", "复杂 SQL", "脚本审查", "数据问题排查", "投产检查"]
  },
  {
    group: "工程自动化",
    items: ["Python 脚本", "Shell 工具", "批处理流程", "Markdown 报告", "PDF 报告"]
  },
  {
    group: "AI 应用",
    items: ["LLM 工作流", "Prompt 模板", "结构化输出", "多文件分析", "人工审核闭环"]
  }
];

export const experiences = [
  {
    period: "2015 - 2026",
    role: "数据仓库 / 数据开发 / 自动化提效",
    description:
      "长期负责数据加工、指标口径、报表支持和问题排查，使用 SQL、Python、Shell 构建可复用脚本和流程，减少重复人工操作。",
    highlights: [
      "把业务需求拆解为稳定的数据处理链路，处理数据口径、异常排查和交付节奏问题。",
      "沉淀常用 SQL 模板、排查脚本和自动化工具，提高报表与数据支持效率。",
      "在真实工作流中引入 AI 辅助脚本分析、问题排查和投产检查，验证 AI 对数据团队的提效价值。"
    ]
  }
];

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "银行数据中台与迁移项目群",
    period: "2020.07 - 至今",
    summary:
      "围绕大型银行数据中台建设，负责数据集市、基础数据模型、领域模型、系统迁移和生产稳定运行，承担项目经理与数据开发组长职责。",
    projects: [
      {
        name: "零售数据集市建设",
        period: "2020.07 - 2022.06",
        technologies: ["GaussDB(DWS)", "Teradata", "Shell", "Python", "调度平台"],
        summary:
          "面向零售存贷款、AUM、理财、基金、保险等业务建设数据集市，为手机银行、报表和消息类系统提供定制化数据加工。",
        responsibilities: [
          "负责需求分析、业务口径和技术口径确认，推动接口设计、映射文档和开发规范落地。",
          "开发 SQL 脚本、配置调度、自测并配合测试人员完成业务逻辑验证。",
          "负责投产上线和上线后数据验证，保障数据交付质量。"
        ]
      },
      {
        name: "数据仓库迁移",
        period: "2022.06 - 2023.06",
        technologies: ["GaussDB(DWS)", "Teradata", "Shell", "Python", "调度平台"],
        summary:
          "将老数据仓库中的批量 ETL 脚本和调度链路按数据中台规范迁移到新平台，完成迁移验证和单轨切换。",
        responsibilities: [
          "负责迁移计划制定、进度跟踪、作业分析和难点需求拆解。",
          "针对复杂迁移场景开发脚本转换和数据验证工具，提高迁移效率。",
          "协调上下游处理开发、验证和生产切换问题，保障批量正常运行。"
        ]
      },
      {
        name: "报表系统迁移",
        period: "2023.06 - 2024.12",
        technologies: ["GaussDB(DWS)", "Hive", "DB2", "Shell", "Python"],
        summary:
          "将原报表系统加工链路从 DB2 与 Hive 迁移到 GaussDB(DWS)，涉及报表、批量脚本、数据验证和作业切换。",
        responsibilities: [
          "负责迁移范围梳理、功能码分析、计划制定和进度跟踪。",
          "开发迁移辅助工具，支撑脚本转换、结果比对和问题定位。",
          "对接业务和上下游团队，合并新增需求并推动单轨切换。"
        ]
      },
      {
        name: "企业级数据模型建设",
        period: "2020.07 - 至今",
        technologies: ["GaussDB(DWS)", "Teradata", "DB2", "Hive", "Python", "Shell"],
        summary:
          "参与基础数据模型、领域模型和集市层加工建设，对接上下游系统并负责生产运维与持续优化。",
        responsibilities: [
          "负责数据计算平台需求分析、ETL 处理和下游数据下发。",
          "管理多个数据开发小组，覆盖集市层、基础模型和领域模型。",
          "保障生产任务平稳运行，支撑跨年度持续交付。"
        ]
      }
    ]
  },
  {
    title: "历史数据平台与报表项目群",
    period: "2015.03 - 2020.06",
    summary:
      "参与历史数据平台、历史库和分行报表类项目建设，覆盖海量历史数据迁移、ETL 开发、联机接口、批量运维和报表开发。",
    projects: [
      {
        name: "历史数据在线化",
        period: "2019.02 - 2020.06",
        technologies: ["Hive", "OceanBase", "Python", "Shell", "Control-M"],
        summary:
          "将多个时期的千亿级历史交易明细数据迁移整合到分布式数据库，为全周期历史明细查询提供支撑。",
        responsibilities: [
          "负责需求查询逻辑确认、历史数据整合迁移和数据处理逻辑梳理。",
          "安排开发实施，推进报表展示验证和数据库优化。",
          "协调接口、离线下载和数据验证相关问题。"
        ]
      },
      {
        name: "历史库系统建设",
        period: "2015.10 - 2020.06",
        technologies: ["OceanBase", "Python", "MySQL", "Shell", "Control-M"],
        summary:
          "参与历史库系统建设，覆盖历史数据存储、ETL、批量运维和前置联机接口开发。",
        responsibilities: [
          "负责业务需求分析、ETL 开发和联机接口开发。",
          "参与批量运维、问题排查和生产支持。",
          "作为项目经理和开发组长推动交付。"
        ]
      },
      {
        name: "分行特色报表开发",
        period: "2015.03 - 2015.09",
        technologies: ["DB2", "Shell", "Control-M", "Eclipse"],
        summary:
          "参与分行特色报表项目，负责报表端和数据加工相关开发工作。",
        responsibilities: [
          "负责需求分析、数据接口开发和 SQL 脚本开发。",
          "参与报表开发、数据迁移和测试问题修复。",
          "支撑项目验收和上线交付。"
        ]
      }
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "ai-script-analysis-assistant",
    title: "AI 脚本分析助手",
    summary: "支持上传 1 个或多个 SQL 脚本，按问题、规范、功能三类进行分析，并输出 Markdown / PDF 报告。",
    problem:
      "SQL 脚本上线或交接前通常需要人工检查逻辑问题、编码规范和功能说明。多个脚本一起审查时，人工逐行阅读耗时长，检查标准也容易受经验差异影响。",
    aiCapabilities: ["多脚本分析", "问题识别", "规范检查", "功能说明生成", "报告生成"],
    techStack: ["SQL", "Python", "LLM", "Prompt 模板", "Markdown", "PDF 生成"],
    solution:
      "将用户上传的 SQL 脚本按文件组织上下文，并根据预设提示词分为脚本问题、脚本规范、脚本功能三大类分析，最终生成结构化 Markdown 报告并支持导出 PDF。",
    implementation: [
      "按文件维度读取 1 个或多个 SQL 脚本，保留文件名、脚本片段和分析类型，避免多脚本上下文混乱。",
      "为问题分析、规范分析、功能分析分别设计提示词模板，要求模型输出发现项、原因说明、影响范围和修改建议。",
      "把模型结果统一整理为 Markdown 报告结构，再生成适合归档或评审的 PDF 报告。"
    ],
    impact: "把脚本审查从纯人工阅读变成 AI 初筛 + 人工复核，提高检查覆盖面，也让问题清单和功能说明更容易沉淀。",
    role: "负责分析分类设计、预设提示词编写、脚本输入组织、报告结构设计和 Markdown / PDF 输出流程设计。",
    screenshot: "/screenshots/ai-script-analysis-assistant.svg"
  },
  {
    slug: "ai-data-issue-troubleshooting",
    title: "AI 数据问题排查",
    summary: "用户提供 SQL 脚本、日志和问题描述后，AI 辅助梳理异常现象、可能原因和排查路径。",
    problem:
      "数据问题排查往往需要同时理解 SQL 逻辑、运行日志和业务描述。信息分散时，定位问题容易依赖个人经验，排查过程也不容易复盘。",
    aiCapabilities: ["问题归纳", "日志解释", "SQL 逻辑分析", "排查路径生成"],
    techStack: ["SQL", "Python", "Shell", "LLM", "日志分析", "结构化输出"],
    solution:
      "把用户提供的 SQL 脚本、运行日志和问题描述作为联合上下文，让 AI 先归纳异常现象，再分析可能原因、验证方式和下一步排查建议。",
    implementation: [
      "把问题描述、SQL 内容、日志片段分区输入，要求模型分别说明事实信息、推断信息和待确认信息。",
      "针对常见数据问题设计排查维度，包括字段口径、过滤条件、关联关系、任务运行、上游数据和异常日志。",
      "输出结构化排查报告，包含问题摘要、可能原因、建议验证 SQL、风险提示和后续处理建议。"
    ],
    impact: "帮助排查人员快速建立分析顺序，减少无效试错，让问题定位过程更清晰、可交接、可复盘。",
    role: "负责输入信息结构设计、排查维度抽象、提示词约束、报告字段设计和人工确认流程设计。",
    screenshot: "/screenshots/ai-data-issue-troubleshooting.svg"
  },
  {
    slug: "personal-toolbox-ai-assistant",
    title: "个人工具箱 / AI 助手",
    summary: "把数据开发、SQL 处理、文档检查、投产包检查和 AI 对话助手整合成一个内部提效工作台。",
    problem:
      "数据开发日常会频繁遇到 SQL 拼接、变量替换、表结构查询、测试数据准备、文档检查和投产材料检查等小任务。如果这些能力分散在脚本、网页和人工流程里，入口混乱，使用成本高，也不利于后续沉淀成团队工具。",
    aiCapabilities: ["工具入口整合", "AI 对话助手", "文档检查", "测试数据生成", "投产包检查"],
    techStack: ["React", "SQL", "Python", "LLM", "Prompt 模板", "结构化输出"],
    solution:
      "按工作场景把工具拆成开发相关、数据库查询、SQL 处理、大模型和其他几类，常规工具用表单化入口承载，复杂问题交给 AI 助手进行对话式分析，并把投产包检查作为标准化检查模块纳入同一个工作台。",
    implementation: [
      "设计左侧分类导航和右侧工具卡片入口，把 CASE 包检查、测试数据生成、SDM 文档检查、SQL 拼接、变量替换、作业查询等能力组织到统一界面。",
      "为 AI 助手提供角色选择、历史会话、思考过程和消息输入区，让代码解释、SQL 排查和知识问答可以在同一个对话界面完成。",
      "将 AI 投产包检查保留为工具箱中的独立模块，按投产规范输出检查项、风险说明、修改建议和需要人工确认的内容。"
    ],
    impact: "把多个零散提效点统一成可访问、可扩展的工作台，减少重复找脚本和手工处理的时间，也让 AI 能力更自然地嵌入数据开发日常流程。",
    role: "负责工具分类、入口信息架构、AI 助手交互设计、投产检查模块设计和脱敏展示图重绘。",
    screenshot: "/screenshots/personal-toolbox-ai-assistant.svg"
  }
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
