# Next.js 极简模板

一个基于 **Next.js 16 + React 19 + TypeScript** 的极简项目模板。

这个仓库的目标很简单：

- 保留最新一代的 Next.js 基础骨架
- 首页只放一个 `Hello World`
- 不预装 Tailwind CSS、Chakra UI、shadcn/ui 之类额外方案
- 保留常用的代码规范工具链，方便继续扩展

## 适合什么场景

适合你想快速起一个干净项目的时候，比如：

- 做一个新的 Next.js 小项目
- 作为 CLI / 脚手架模板的前端初始页
- 不想先选 UI 框架，只想先把项目跑起来

## 当前模板包含

- Next.js 16
- React 19
- TypeScript
- App Router
- ESLint
- Prettier
- lint-staged
- simple-git-hooks

## 当前模板不包含

- Tailwind CSS
- Chakra UI
- shadcn/ui
- 业务组件
- 复杂页面结构

## 快速开始

### 环境要求

- Node.js 18+
- pnpm

### 安装依赖

```bash
pnpm install
```

### 启动开发环境

```bash
pnpm dev
```

启动后访问：<http://localhost:3000>

## 默认页面

当前首页只有一个最小示例：

- 标题：`Hello World`
- 提示：从 `src/app/page.tsx` 开始修改

## 项目结构

```text
src/
	app/
		layout.tsx
		page.tsx
	styles/
		globals.css
template/
	package.json
```

## 常用命令

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm lint-fix
```

## 关键文件说明

- `src/app/page.tsx`：首页内容入口
- `src/app/layout.tsx`：全局布局与 metadata
- `src/styles/globals.css`：全局样式
- `next.config.mjs`：Next.js 配置
- `template/package.json`：模板包依赖定义

## 扩展建议

如果你后面要继续扩展，可以按需要再加：

- UI 框架
- 接口路由
- 状态管理
- 测试工具
- 部署配置

先保持简单，再按需加料，模板才不会一上来就胖成球。 
