# AI Skill Training Center 网页 Demo

山东大学创新实践中心「人工智能技能训练中心」高保真前端演示项目。

## 运行

```bash
pnpm install
pnpm dev
```

浏览器打开终端提示的本地地址即可。也可使用 `npm install` 与 `npm run dev`。

## 页面

- `/` 学生首页 Dashboard
- `/skill-map` AI 能力地图
- `/skillhub` SkillHub 训练中心
- `/skillhub/ai-coding` Skill 详情与训练路径
- `/certification` 能力认证
- `/tasks` Task / Challenge / Project 实践中心
- `/equipment` 具身智能设备中心
- `/growth` Nova 成长中心与 Nova Board
- `/admin` 教师管理端 Dashboard

## 结构

- `app/portal.tsx`：平台界面、通用框架及各页面交互组件
- `app/*/page.tsx`：独立路由入口
- `lib/mock-data.ts`：学生、Skill、认证、任务、设备与成长记录等 Mock 数据
- `app/globals.css`：平台主题、Tailwind 与全局样式
- `public/favicon.svg`：站点图标

当前项目不依赖后端。后续可将 `lib/mock-data.ts` 替换为数据库或 API 数据层，而不改变页面信息架构。
