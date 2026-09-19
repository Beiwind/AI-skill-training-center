export type Skill = {
  id: string;
  title: string;
  category: "洞察" | "研究" | "创造" | "表达" | "应用";
  icon: string;
  description: string;
  progress: number;
  level: string;
  learners: number;
  tools: string[];
  accent: string;
};

export const student = {
  name: "张雨晴",
  college: "计算机科学与技术学院",
  grade: "探索者",
  nextGrade: "实践者",
  nova: 1280,
  weeklyHours: 8.5,
  rank: "成长前 12%",
};

export const abilities = [
  { key: "insight", title: "AI for Insight", cn: "问题洞察", score: 72, desc: "发现问题、理解需求、拆解任务", icon: "Search" },
  { key: "research", title: "AI for Research", cn: "信息研判", score: 64, desc: "获取信息、分析比较、形成判断", icon: "BookOpen" },
  { key: "creation", title: "AI for Creation", cn: "创新设计", score: 81, desc: "形成方案、开发原型、创造解决方案", icon: "Sparkles" },
  { key: "expression", title: "AI for Expression", cn: "成果表达", score: 58, desc: "组织观点、优化呈现、展示成果", icon: "MessageSquare" },
  { key: "application", title: "AI for Application", cn: "应用转化", score: 46, desc: "整合资源、持续优化、推动落地", icon: "Rocket" },
];

export const skills: Skill[] = [
  { id: "ai-coding", title: "AI 辅助编程", category: "创造", icon: "Code2", description: "利用 AI 完成需求拆解、代码生成、调试与交付的完整开发过程。", progress: 70, level: "进阶", learners: 486, tools: ["TRAE", "Cursor", "Codex"], accent: "blue" },
  { id: "agent", title: "AI 智能体搭建", category: "应用", icon: "Bot", description: "设计任务流程，编排工具与知识库，构建可靠的智能体应用。", progress: 35, level: "进阶", learners: 328, tools: ["Coze", "Dify", "MCP"], accent: "violet" },
  { id: "visual", title: "AI 视觉创作", category: "创造", icon: "Palette", description: "从创意意图到视觉成品，掌握生成、控制与审美评估。", progress: 0, level: "入门", learners: 562, tools: ["即梦", "Figma", "ComfyUI"], accent: "orange" },
  { id: "research", title: "AI 辅助科研", category: "研究", icon: "Microscope", description: "高效完成文献检索、证据研判、数据分析与研究表达。", progress: 18, level: "进阶", learners: 291, tools: ["NotebookLM", "Elicit", "Python"], accent: "cyan" },
  { id: "digital-human", title: "AI 数字人", category: "表达", icon: "UserRound", description: "完成数字形象、语音驱动与内容编排，服务知识传播。", progress: 0, level: "入门", learners: 214, tools: ["HeyGen", "剪映", "ElevenLabs"], accent: "rose" },
  { id: "3d", title: "AI 3D 设计", category: "创造", icon: "Box", description: "将概念草图转化为三维模型，并完成场景化表达与验证。", progress: 0, level: "挑战", learners: 147, tools: ["Meshy", "Blender", "Unity"], accent: "indigo" },
];

export const tasks = [
  { type: "Challenge", title: "校园知识库 Agent", source: "山东大学图书馆", skills: ["智能体", "信息研判"], difficulty: "进阶", people: 18, deadline: "09月28日", status: "招募中", desc: "构建可溯源、会澄清的馆藏资源问答助手。" },
  { type: "Task", title: "AI 辅助科研工具评测", source: "创新实践中心", skills: ["AI辅助科研"], difficulty: "入门", people: 32, deadline: "09月22日", status: "进行中", desc: "围绕真实研究任务建立工具评测框架并完成验证。" },
  { type: "Project", title: "机器人视觉分拣系统", source: "控制科学与工程学院", skills: ["机器人视觉", "AI编程"], difficulty: "挑战", people: 8, deadline: "10月18日", status: "招募中", desc: "基于 XTrainer 完成目标识别与机械臂抓取闭环。" },
  { type: "Task", title: "新生智能服务助手", source: "学生工作部", skills: ["智能体", "成果表达"], difficulty: "进阶", people: 24, deadline: "10月05日", status: "即将开始", desc: "把分散的迎新信息转化为可交互的服务流程。" },
];

export const certifications = [
  { title: "AI 辅助编程认证", status: "可申请", requirement: "开发一个课程管理工具", completed: 3, total: 4, color: "blue" },
  { title: "AI 智能体搭建认证", status: "训练中", requirement: "完成可追溯知识库 Agent", completed: 2, total: 4, color: "violet" },
  { title: "AI 数字内容创作认证", status: "已认证", requirement: "提交主题视觉叙事作品", completed: 4, total: 4, color: "orange" },
];

export const equipment = [
  { name: "SO-ARM101", kind: "开源机械臂", status: "可预约", slots: 4, qualification: "已具备 L1 准入", usage: 62, icon: "Armchair" },
  { name: "XTrainer", kind: "具身智能训练平台", status: "可预约", slots: 2, qualification: "需完成安全认证", usage: 78, icon: "Cpu" },
  { name: "移动机器人平台", kind: "自主导航平台", status: "维护中", slots: 0, qualification: "需具备 L2 认证", usage: 91, icon: "Bot" },
];

export const growthRecords = [
  { date: "09.16", type: "Skill", title: "完成「AI 辅助调试」实验", nova: "+80" },
  { date: "09.12", type: "认证", title: "获得 AI 数字内容创作认证", nova: "+240" },
  { date: "09.08", type: "贡献", title: "分享提示词调试方法", nova: "+60" },
  { date: "08.29", type: "Challenge", title: "提交校园空间导览原型", nova: "+180" },
];

export const adminStats = [
  { label: "活跃学生", value: "2,486", delta: "+12.8%" },
  { label: "Skill 训练", value: "8,392", delta: "+18.4%" },
  { label: "能力认证", value: "1,274", delta: "+9.6%" },
  { label: "实践项目", value: "186", delta: "+23.1%" },
];
