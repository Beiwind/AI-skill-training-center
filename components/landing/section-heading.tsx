export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">
    <div className={`text-xs font-bold uppercase tracking-[.22em] ${light ? "text-cyan-300" : "text-blue-600"}`}>{eyebrow}</div>
    <h2 className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
    {description && <p className={`mt-4 text-base leading-7 ${light ? "text-blue-100/65" : "text-slate-500"}`}>{description}</p>}
  </div>;
}
