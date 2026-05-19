# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

"发现我的闪光点" - 一个通过 18 道场景题帮助用户发现自身闪光点的问答游戏网站。

目标用户：经常自我否定、忽略自己优点、想要更了解自己的人。

## 技术栈

- **框架**: Next.js 15 (App Router) + TypeScript
- **样式**: Tailwind CSS 4 + CSS 动画
- **动画**: Framer Motion
- **状态管理**: React Context

## 常用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 生产构建
pnpm start        # 启动生产服务器
pnpm lint         # 代码检查
```

## 目录结构

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页 (GameContent)
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── LandingPage.tsx   # 落地页
│   ├── QuizPage.tsx      # 答题页面
│   └── ResultPage.tsx    # 结果页
├── hooks/
│   └── useGame.tsx       # 游戏状态管理
└── lib/
    ├── questions.ts       # 18道题目数据
    └── analysis.ts       # 答案分析与闪光点生成
```

## 核心逻辑

### 游戏状态流
`landing` → `quiz` → `result` → `restart` → `landing`

### 题目数据结构
每道题包含：维度、题目文本、4个选项，每个选项关联若干性格特质。

### 闪光点分析
1. 统计用户选择中的特质出现频率
2. 按频率排序生成 topTraits
3. 取前5个生成 sparklePoints
4. 计算各维度得分

## 设计规范

- 主色调：橙色系 (`#f76c11`)
- 背景色：暖色 (`#fef9f3`)
- 动画：fade-in、slide-up、scale-in、glow
- 字体：系统默认无衬线字体