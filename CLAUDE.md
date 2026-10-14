# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, single-page marketing site for the Apex Debugger Chrome extension (Salesforce Apex debug logs; source at github.com/motiko/sfdc-debug-logs). There is no JS framework, bundler, or test suite. The site is hand-written HTML styled with Tailwind CSS v2.

## Commands

- `npm run dev` — serves `public/` on http://localhost:3000 and watches `styles.css`, recompiling `public/compiled.css` (runs `serve` and `compile:css` in parallel via `npm-run-all`)
- `npm run build` — production CSS build (`NODE_ENV=production` turns on Tailwind purge)
- `npm run serve` — serve `public/` only, with no CSS compilation

There are no lint or test scripts.

## Architecture

- `public/` is the deployable site root. `public/index.html` holds the whole page (header/nav, `#top` hero, `#features`, `#shortcuts`, `#reviews`, footer), and the nav links to these section anchors.
- `styles.css` holds the Tailwind directives plus the design tokens, which are CSS variables mirroring the extension's `react/src/ui/tokens.ts` (motiko/sfdc-debug-logs v0.9). `tailwind.config.js` exposes them as Tailwind colors (`bg-surface`, `text-muted`, `text-accent`, `log-*`, …). Light/dark switches via `prefers-color-scheme` on the variables, not Tailwind `dark:` variants. The header theme toggle (inline scripts in `index.html`, persisted to `localStorage.theme`) overrides this by setting `data-theme="light|dark"` on `<html>`, so the dark token values appear twice in `styles.css` (media query and `[data-theme="dark"]`) and must be kept in sync. This is Tailwind v2 without JIT, so there are no arbitrary values either. PostCSS (`postcss.config.js`: tailwindcss + autoprefixer) compiles it to `public/compiled.css`, which `index.html` links. `compiled.css` is gitignored, so it must be built before serving or deploying.
- Tailwind v2 config (`tailwind.config.js`) purges against `public/*.html`. In production builds, any utility class that doesn't appear literally in those HTML files is stripped. Write full class names in the HTML, and add any new HTML pages under `public/` so the glob picks them up.
- SEO metadata (canonical, Open Graph/Twitter, JSON-LD) lives in the `index.html` `<head>`, alongside `public/robots.txt`, `public/sitemap.xml` and `public/og-image.png`. The canonical domain is apex-debugger-website.vercel.app.
- `public/google4a8c0376cc0771be.html` is a Google Search Console verification file. Keep it.
