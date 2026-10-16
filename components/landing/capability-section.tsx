import { ArrowDown, Cpu, GraduationCap } from "lucide-react";
import { embodiedLevels, generalCapabilities } from "@/lib/landing-data";
import { SectionHeading } from "./section-heading";

export function CapabilitySection() {
  return <section id="capability" className="scroll-mt-16 bg-white py-24 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <SectionHeading eyebrow="Capability Framework" title="AI 能力培养体系" description="通用 AI 能力筑基与具身智能实践进阶双线并行，让学生从理解问题走向创造真实解决方案。" />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7faff] shadow-sm">
          <div className="flex items-center gap-4 border-b border-slate-200 bg-white p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white"><GraduationCap className="h-6 w-6" /></span><div><div className="text-xs font-bold uppercase tracking-[.16em] text-blue-600">Foundation</div><h3 className="mt-1 text-xl font-semibold text-slate-950">通用 AI 能力筑基</h3></div></div>
          <div className="p-5 md:p-6">{generalCapabilities.map((item, i) => { const Icon = item.icon; return <div key={item.en} className="group relative flex items-center gap-4 border-b border-slate-200/80 py-4 last:border-0"><span className="w-7 text-xs font-bold text-slate-300">0{i + 1}</span><span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"><Icon className="h-5 w-5" /></span><div><h4 className="text-sm font-semibold text-slate-900">{item.en}</h4><p className="mt-1 text-sm text-slate-500">{item.cn} <span className="mx-1 text-slate-300">/</span> {item.detail}</p></div><div className="ml-auto hidden h-px w-12 bg-gradient-to-r from-blue-300 to-transparent sm:block" /></div>})}</div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-blue-900 bg-[#0a2751] text-white shadow-xl shadow-blue-950/10">
          <div className="flex items-center gap-4 border-b border-white/10 p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-400/15 text-orange-300"><Cpu className="h-6 w-6" /></span><div><div className="text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Embodied Intelligence</div><h3 className="mt-1 text-xl font-semibold">具身智能实践进阶</h3></div></div>
          <div className="p-5 md:p-6">{embodiedLevels.map((item, i) => <div key={item.level} className="relative flex gap-4 pb-7 last:pb-0"><div className="flex flex-col items-center"><span className={`grid h-10 w-10 place-items-center rounded-full border text-xs font-bold ${i === 3 ? "border-orange-300 bg-orange-400 text-white" : "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"}`}>{item.level}</span>{i < 3 && <span className="mt-2 h-full w-px bg-gradient-to-b from-cyan-300/40 to-blue-300/5" />}</div><div className="pt-1"><div className="flex items-center gap-2"><h4 className="font-semibold">{item.en}</h4><ArrowDown className="h-3 w-3 text-blue-300/40" /></div><p className="mt-1 text-sm text-blue-100/75">{item.cn} · {item.detail}</p></div></div>)}</div>
        </article>
      </div>
      <div className="mt-6 rounded-xl border border-orange-100 bg-orange-50/70 px-6 py-4 text-center text-sm text-orange-900"><strong>双线汇聚：</strong>在真实 Task、Challenge 与 Project 中组合能力，形成可验证、可迁移的 AI 问题解决能力。</div>
    </div>
  </section>;
}
