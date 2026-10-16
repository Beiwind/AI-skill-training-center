import { growthSteps } from "@/lib/landing-data";
import { SectionHeading } from "./section-heading";

export function GrowthSection() {
  return <section id="growth" className="scroll-mt-16 overflow-hidden bg-white py-24 md:py-28">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <SectionHeading eyebrow="Nova Growth Journey" title="从学习者到创新实践者" description="Skill 证明你能够做什么，Nova 记录你如何持续成长、协作并创造价值。" />
      <div className="relative mt-16">
        <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-blue-100 via-blue-500 to-orange-300 lg:block" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{growthSteps.map((step, i) => { const Icon = step.icon; return <article key={step.name} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className={`relative z-10 grid h-20 w-20 place-items-center rounded-full border-8 border-white shadow-md ${i === 4 ? "bg-orange-500 text-white" : i < 2 ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}><Icon className="h-7 w-7" /></div>
          <div className="mt-5 text-xs font-bold tracking-[.12em] text-blue-600">STAGE 0{i + 1}</div><h3 className="mt-2 text-xl font-semibold text-slate-950">{step.name}</h3><div className="mt-3 inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{step.action}</div><p className="mt-3 text-sm leading-6 text-slate-500">{step.description}</p>
        </article>})}</div>
      </div>
      <div className="mt-8 flex justify-center"><div className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-800">训练不是终点，每一次成果、贡献与协作都会成为新的成长起点。</div></div>
    </div>
  </section>;
}
