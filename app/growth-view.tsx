"use client";

import { Award, Sparkles, Trophy, UsersRound, Zap } from "lucide-react";
import { growthRecords, student } from "@/lib/mock-data";

function Bar({ value }: { value: number }) {
  return <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-500" style={{ width: `${value}%` }} /></div>;
}

export default function GrowthView() {
  const levels = ["启航者", "探索者", "实践者", "创新者", "Nova"];
  return <div className="space-y-6">
    <section className="grid gap-6 rounded-2xl bg-[#0a2751] p-7 text-white lg:grid-cols-[.65fr_1.35fr]">
      <div>
        <div className="mb-3 text-xs font-semibold tracking-[.16em] text-blue-300">MY NOVA PROFILE</div>
        <div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-orange-300 to-orange-500 text-xl font-bold">张</div><div><h2 className="text-2xl font-semibold">张雨晴</h2><p className="mt-1 text-sm text-blue-100/55">计算机科学与技术学院 · 2025级</p></div></div>
        <div className="mt-6 flex gap-8"><div><div className="text-2xl font-semibold">1,280</div><div className="text-xs text-blue-100/50">Nova 成长值</div></div><div><div className="text-2xl font-semibold">{student.rank}</div><div className="text-xs text-blue-100/50">本学期成长</div></div></div>
      </div>
      <div className="self-center rounded-xl border border-white/10 bg-white/[.06] p-5">
        <div className="flex items-end justify-between"><div><div className="text-xs text-blue-100/50">当前等级</div><div className="mt-1 text-xl font-semibold">探索者</div></div><div className="text-right"><div className="text-xs text-blue-100/50">下一等级</div><div className="mt-1 text-sm font-medium text-orange-300">实践者 · 还差 320</div></div></div>
        <div className="mt-7 flex items-center">{levels.map((x, i) => <div key={x} className="flex min-w-0 flex-1 items-center last:flex-none"><div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] ${i <= 1 ? "bg-orange-400 font-bold text-white" : "bg-white/10 text-blue-100/50"}`}>{i + 1}</div>{i < 4 && <div className={`h-0.5 flex-1 ${i < 1 ? "bg-orange-400" : "bg-white/10"}`} />}</div>)}</div>
        <div className="mt-2 flex justify-between text-[10px] text-blue-100/45">{levels.map(x => <span key={x}>{x}</span>)}</div>
      </div>
    </section>
    <section className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 text-xs font-semibold tracking-[.16em] text-blue-600">成长记录</div>
        <div className="space-y-1">{growthRecords.map((r, i) => <div key={r.title} className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0"><div className="w-10 text-xs font-medium text-slate-400">{r.date}</div><div className={`grid h-9 w-9 place-items-center rounded-full ${i === 1 ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"}`}>{i === 1 ? <Award className="h-4 w-4" /> : i === 2 ? <UsersRound className="h-4 w-4" /> : <Zap className="h-4 w-4" />}</div><div><div className="text-xs text-slate-400">{r.type}</div><div className="mt-0.5 text-sm font-medium">{r.title}</div></div><span className="ml-auto text-sm font-semibold text-blue-600">{r.nova}</span></div>)}</div>
      </div>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-3 text-xs font-semibold tracking-[.16em] text-blue-600">我的成果</div><div className="grid grid-cols-3 gap-3">{[["8", "项目"], ["2", "Challenge"], ["3", "认证"]].map(([n,l]) => <div key={l} className="rounded-xl bg-slate-50 p-4 text-center"><div className="text-2xl font-semibold">{n}</div><div className="mt-1 text-xs text-slate-400">{l}</div></div>)}</div></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-3 text-xs font-semibold tracking-[.16em] text-blue-600">我的贡献</div><div className="space-y-3">{[["知识分享", 12, 68], ["协作贡献", 8, 52], ["Mentor 帮助", 3, 28]].map(([l,n,p]) => <div key={String(l)}><div className="mb-2 flex justify-between text-sm"><span>{l}</span><span className="text-slate-400">{n} 次</span></div><Bar value={Number(p)} /></div>)}</div></div>
      </div>
    </section>
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between"><div><div className="mb-3 text-xs font-semibold tracking-[.16em] text-blue-600">NOVA BOARD</div><h3 className="text-lg font-semibold">共同成长 · 本周优秀实践</h3></div><Trophy className="h-7 w-7 text-orange-500" /></div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">{[["优秀 Skill 成果", "基于多智能体的文献研判流程", "李昕 · 公共卫生学院"], ["优秀 Challenge", "校园无障碍空间智能导览", "跨学科小组 · 6人"], ["学生分享", "我如何验证 AI 生成代码", "王珂 · 软件学院"]].map(([t,d,a], i) => <div key={t} className="rounded-xl border border-slate-100 bg-slate-50 p-4"><span className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${i === 1 ? "bg-orange-50 text-orange-700" : "bg-blue-50 text-blue-700"}`}>{t}</span><div className="mt-3 font-semibold">{d}</div><div className="mt-2 text-xs text-slate-400">{a}</div></div>)}</div>
    </section>
  </div>;
}
