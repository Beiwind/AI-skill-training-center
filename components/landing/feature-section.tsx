import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platformFeatures } from "@/lib/landing-data";
import { SectionHeading } from "./section-heading";

export function FeatureSection() {
  return <section id="platform" className="scroll-mt-16 bg-[#f3f7fc] py-24 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <SectionHeading eyebrow="Open Training Platform" title="开放式 AI 能力训练平台" description="从方向发现到能力认证，从开放实践到成长记录，形成完整的学生能力成长操作系统。" />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{platformFeatures.map((item, i) => { const Icon = item.icon; return <Link href={item.href} key={item.en} className={`group relative min-h-60 overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${i === 0 ? "border-blue-700 bg-[#0b3263] text-white shadow-lg shadow-blue-950/10" : "border-slate-200 bg-white text-slate-900 hover:border-blue-200"}`}>
        <div className="flex items-start justify-between"><span className={`grid h-12 w-12 place-items-center rounded-xl ${i === 0 ? "bg-cyan-300/15 text-cyan-300" : i === 4 ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"}`}><Icon className="h-6 w-6" /></span><span className={`text-xs font-bold ${i === 0 ? "text-cyan-300/60" : "text-slate-300"}`}>{item.no}</span></div>
        <div className="mt-8"><p className={`text-xs font-semibold uppercase tracking-[.14em] ${i === 0 ? "text-cyan-300" : "text-blue-600"}`}>{item.en}</p><h3 className="mt-2 text-xl font-semibold">{item.cn}</h3><p className={`mt-3 text-sm leading-6 ${i === 0 ? "text-blue-100/60" : "text-slate-500"}`}>{item.detail}</p></div>
        <ArrowUpRight className={`absolute bottom-6 right-6 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1 ${i === 0 ? "text-cyan-300" : "text-slate-300 group-hover:text-blue-600"}`} />
      </Link>})}</div>
    </div>
  </section>;
}
