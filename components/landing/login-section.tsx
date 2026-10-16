import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

export function LoginSection() {
  return <section id="login" className="scroll-mt-16 bg-[#071a38] py-24 text-white md:py-28">
    <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-blue-950/30"><Sparkles className="h-7 w-7" /></div>
      <h2 className="mt-7 text-3xl font-semibold tracking-tight md:text-4xl">开启你的 AI 能力成长之旅</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100/60">选择你的身份进入平台，在真实问题中学习、训练、认证、创造，并记录每一步成长。</p>
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
        <Link href="/dashboard" className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-left text-slate-950 transition hover:-translate-y-1 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white"><GraduationCap className="h-6 w-6" /></span><span><strong className="block text-base">学生登录</strong><small className="mt-1 block text-sm text-slate-500">进入训练平台</small></span><ArrowRight className="ml-auto h-5 w-5 text-blue-600 transition group-hover:translate-x-1" /></Link>
        <Link href="/admin" className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[.06] p-5 text-left text-white transition hover:-translate-y-1 hover:bg-white/10"><span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-400/15 text-orange-300"><ShieldCheck className="h-6 w-6" /></span><span><strong className="block text-base">管理员登录</strong><small className="mt-1 block text-sm text-blue-100/55">进入管理后台</small></span><ArrowRight className="ml-auto h-5 w-5 text-orange-300 transition group-hover:translate-x-1" /></Link>
      </div>
      <div className="mt-16 border-t border-white/10 pt-7"><div className="text-sm font-semibold">AI Skill Training Center</div><div className="mt-2 text-xs tracking-[.18em] text-blue-200/45">山东大学创新实践中心</div></div>
    </div>
  </section>;
}
