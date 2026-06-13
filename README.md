# Ravi Goswami — Developer Portfolio

A modern developer portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, showcasing professional experience, projects, and technical writing.

## Features

- Single-page home with anchored sections (Hero, About, Experience, Skills, Education, Contact)
- `/projects` — MDX-powered project showcase with detailed write-ups
- `/blog` — MDX blog with tag support
- Resume PDF download
- SEO metadata, Open Graph image, sitemap, and robots.txt
- Dark theme with responsive design

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Content

### Projects

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Title"
description: "Short description"
company: "Company Name"
impact: "Key metric or outcome"
technologies:
  - Node.js
  - PostgreSQL
slug: project-slug
github: https://github.com/optional-link
demo: https://optional-demo-link
---

## Overview

Your project details here...
```

### Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Post Title"
date: "2025-06-01"
summary: "Brief summary for the index page"
tags:
  - nodejs
  - performance
slug: post-slug
---

Your article content here...
```

### Resume PDF

Replace `public/resume.pdf` with your actual resume PDF. The download buttons in the Hero, Navbar, and Footer link to this file.

### Site URL

Set your production URL for SEO:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Deploy to Vercel

1. Push this repo to GitHub (`github.com/ravigoswami25/portfolio`)
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Set `NEXT_PUBLIC_SITE_URL` to your Vercel domain in project environment variables
4. Deploy — Vercel auto-detects Next.js with zero config

Every push to `main` triggers an automatic redeployment.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for MDX content
- [lucide-react](https://lucide.dev/) for icons
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing

## Project Structure

```
app/                  # Next.js App Router pages
components/
  layout/             # Navbar, Footer
  sections/           # Home page sections
  projects/           # Project card component
  blog/               # Blog card + MDX renderer
content/
  projects/           # Project MDX files
  blog/               # Blog MDX files
data/
  resume.ts           # Resume content (typed)
lib/
  mdx.ts              # Content loading helpers
  utils.ts            # Utility functions
public/
  resume.pdf          # Downloadable resume
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
