import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function LandingHeader() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071a38]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center px-5 md:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label="AI Skill Training Center 首页">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-950/30"><Sparkles className="h-5 w-5" /></span>
        <span><strong className="block text-sm font-semibold tracking-tight text-white">AI Skill Training Center</strong><small className="block text-[11px] tracking-[.12em] text-blue-300">人工智能技能训练中心</small></span>
      </Link>
      <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="首页导航">
        <a href="#home" className="text-sm text-blue-100/75 transition hover:text-white">首页</a>
        <a href="#capability" className="text-sm text-blue-100/75 transition hover:text-white">能力体系</a>
        <a href="#platform" className="text-sm text-blue-100/75 transition hover:text-white">训练中心</a>
        <a href="#growth" className="text-sm text-blue-100/75 transition hover:text-white">成长体系</a>
        <a href="#login" className="text-sm text-blue-100/75 transition hover:text-white">登录</a>
      </nav>
      <Link href="/dashboard" className="ml-auto inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0a2751] transition hover:bg-blue-50 lg:ml-8">进入平台<ArrowUpRight className="h-4 w-4" /></Link>
    </div>
  </header>;
}
