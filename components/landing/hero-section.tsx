import Link from "next/link";
import { ArrowRight, ChevronDown, GraduationCap, ShieldCheck } from "lucide-react";

function NetworkVisual() {
  const nodes = [
    { x: 76, y: 55, label: "INSIGHT", active: false }, { x: 230, y: 38, label: "RESEARCH", active: false },
    { x: 338, y: 148, label: "CREATE", active: true }, { x: 214, y: 258, label: "EXPRESS", active: false },
    { x: 55, y: 218, label: "APPLY", active: false },
  ];
  return <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
    <div className="absolute inset-[12%] rounded-full border border-cyan-300/15" />
    <div className="absolute inset-[24%] rounded-full border border-blue-300/15" />
    <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full overflow-visible">
      <defs><linearGradient id="networkLine" x1="0" x2="1"><stop stopColor="#38bdf8" stopOpacity=".18" /><stop offset=".5" stopColor="#60a5fa" stopOpacity=".8" /><stop offset="1" stopColor="#fb923c" stopOpacity=".25" /></linearGradient></defs>
      <path d="M76 55 230 38 338 148 214 258 55 218 76 55ZM76 55 338 148M230 38 214 258M55 218 338 148" fill="none" stroke="url(#networkLine)" strokeWidth="1.5" />
      <circle cx="200" cy="153" r="68" fill="#0b3c72" stroke="#38bdf8" strokeOpacity=".32" />
      <circle cx="200" cy="153" r="49" fill="#0d4a86" stroke="#60a5fa" strokeOpacity=".45" />
      <path d="m179 164 21-42 21 42-21-10z" fill="#38bdf8" opacity=".9" /><circle cx="200" cy="153" r="9" fill="#fb923c" />
      {nodes.map(n => <g key={n.label}><circle cx={n.x} cy={n.y} r={n.active ? 12 : 8} fill={n.active ? "#fb923c" : "#38bdf8"} /><circle cx={n.x} cy={n.y} r={n.active ? 22 : 16} fill="none" stroke={n.active ? "#fb923c" : "#38bdf8"} strokeOpacity=".2" /><text x={n.x} y={n.y + 30} fill="#bfdbfe" fillOpacity=".66" textAnchor="middle" fontSize="8" letterSpacing="1.5">{n.label}</text></g>)}
    </svg>
    <div className="absolute bottom-[5%] right-[3%] rounded-xl border border-white/10 bg-white/[.07] px-4 py-3 backdrop-blur"><div className="text-[10px] tracking-[.12em] text-cyan-300">ABILITY LOOP</div><div className="mt-1 text-sm font-semibold text-white">学习 · 训练 · 创造</div></div>
  </div>;
}

export function HeroSection() {
  return <section id="home" className="relative overflow-hidden bg-[#071a38] pb-16 pt-[128px] text-white md:min-h-[780px] md:pb-24 md:pt-[164px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(29,114,190,.3),transparent_34%),radial-gradient(circle_at_12%_80%,rgba(37,99,235,.18),transparent_30%)]" />
    <div className="absolute inset-0 opacity-[.14] [background-image:linear-gradient(rgba(147,197,253,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,.18)_1px,transparent_1px)] [background-size:56px_56px]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.12fr_.88fr]">
      <div>
        <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-cyan-300"><span className="h-px w-10 bg-cyan-300" />Shandong University · Innovation Practice Center</div>
        <h1 className="text-5xl font-semibold leading-[1.03] tracking-[-.035em] sm:text-6xl xl:text-7xl">AI Skill<br /><span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">Training Center</span></h1>
        <div className="mt-5 flex items-center gap-4"><span className="h-px w-12 bg-orange-400" /><p className="text-lg font-medium tracking-[.16em] text-blue-100 md:text-xl">人工智能技能训练中心</p></div>
        <h2 className="mt-8 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">面向真实问题，<br />培养 AI 增强型问题解决者</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/65">面向全校学生开放，构建自主学习、开放实践、共同成长的 AI 能力生态。通过技能训练、能力认证和真实任务实践，引导学生掌握 AI、运用 AI、驾驭 AI。</p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm"><span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-blue-100">Learn · Train · Certify · Create · Grow</span><span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-orange-200">自主学习 · 技能训练 · 能力认证 · 创新实践 · 持续成长</span></div>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/dashboard" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition hover:bg-blue-500"><GraduationCap className="h-5 w-5" />进入学生平台<ArrowRight className="h-4 w-4" /></Link><Link href="/admin" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[.06] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"><ShieldCheck className="h-5 w-5" />进入管理平台</Link></div>
      </div>
      <NetworkVisual />
    </div>
    <div className="relative mx-auto mt-14 grid max-w-7xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">{[["01", "全校开放", "跨学科、跨专业的 AI 能力公共训练场"], ["02", "任务牵引", "围绕真实问题形成学习与实践闭环"], ["03", "成长可见", "用 Skill 证明能力，用 Nova 记录成长"]].map(([n,t,d]) => <div key={n} className="bg-[#0a2448]/90 px-6 py-5"><span className="text-xs font-bold text-orange-300">{n}</span><strong className="ml-3 text-sm text-white">{t}</strong><p className="mt-2 text-sm text-blue-100/50">{d}</p></div>)}</div>
    <a href="#capability" aria-label="查看能力培养体系" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-blue-200/50 md:block"><ChevronDown className="h-6 w-6" /></a>
  </section>;
}
