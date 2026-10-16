import {
  Award,
  Bot,
  BrainCircuit,
  Boxes,
  ChartNoAxesCombined,
  Compass,
  Cpu,
  FlaskConical,
  Lightbulb,
  Map,
  MessageSquareText,
  Microscope,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

export const generalCapabilities = [
  { en: "AI for Insight", cn: "问题洞察", detail: "发现问题 · 理解需求", icon: Lightbulb },
  { en: "AI for Research", cn: "信息研判", detail: "获取信息 · 形成判断", icon: Microscope },
  { en: "AI for Creation", cn: "创新设计", detail: "形成方案 · 开发原型", icon: Sparkles },
  { en: "AI for Expression", cn: "成果表达", detail: "组织观点 · 优化呈现", icon: MessageSquareText },
  { en: "AI for Application", cn: "应用转化", detail: "整合资源 · 推动落地", icon: Rocket },
];

export const embodiedLevels = [
  { level: "L1", en: "Explore", cn: "认知准入", detail: "理解原理与安全边界" },
  { level: "L2", en: "Operate", cn: "单机技能", detail: "掌握设备操作与控制" },
  { level: "L3", en: "Challenge", cn: "综合任务", detail: "完成感知决策执行闭环" },
  { level: "L4", en: "Create", cn: "场景创新", detail: "面向真实场景创造方案" },
];

export const platformFeatures = [
  { no: "01", en: "Skill Map", cn: "能力地图", detail: "发现适合自己的成长方向", icon: Map, href: "/skill-map" },
  { no: "02", en: "SkillHub", cn: "训练中心", detail: "学习资源、实验项目、实践任务", icon: FlaskConical, href: "/skillhub" },
  { no: "03", en: "Certification", cn: "能力认证", detail: "以真实成果验证 AI 能力", icon: Award, href: "/certification" },
  { no: "04", en: "Task & Challenge", cn: "任务实践", detail: "参与真实问题和创新挑战", icon: Target, href: "/tasks" },
  { no: "05", en: "Equipment", cn: "设备中心", detail: "开展具身智能设备训练", icon: Cpu, href: "/equipment" },
  { no: "06", en: "Nova Growth", cn: "成长记录", detail: "沉淀能力、成果和实践经历", icon: ChartNoAxesCombined, href: "/growth" },
];

export const growthSteps = [
  { name: "启航者", action: "技能训练", description: "建立 AI 认知，完成首项技能训练", icon: Compass },
  { name: "探索者", action: "能力认证", description: "在真实产出中验证学习成果", icon: BrainCircuit },
  { name: "实践者", action: "创新实践", description: "参与跨学科任务与综合挑战", icon: Boxes },
  { name: "创新者", action: "成果积累", description: "形成可复用、可展示的创新成果", icon: Bot },
  { name: "Nova", action: "持续成长", description: "分享协作，带动开放实践生态", icon: Sparkles },
];
