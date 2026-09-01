# WorldFreightHub — Deployment Guide

Last updated: 2026-09-01

## Stack

- **Framework**: Astro 7.2.9 (static output)
- **Styling**: pure CSS (navy/amber design system), no client-side JavaScript
- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **Node version**: 20.x (any LTS ≥ 18 works)

## 1. Cloudflare Pages — primary site

1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the GitHub repo `martinxionbiotech-max/worldfreighthub`.
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: none required (fully static).
4. Save and deploy. Cloudflare auto-builds on every push to `main`.

## 2. Custom domains

- **Primary**: `worldfreighthub.net` → attach to the Pages project above.
- **Subdomain** (phase 2, optional): `middleeast.worldfreighthub.net` is planned as a
  separate Pages project pointing at the same repo, or a monorepo split. Decision
  pending — currently everything ships under `worldfreighthub.net/middleeast/`.

DNS note: the domain `worldfreighthub.net` is not yet pointed at Cloudflare. Add an
`A`/`CNAME` record (or use Cloudflare's automatic CNAME setup for Pages) once the
project is created.

## 3. Post-deploy checklist

- [ ] `https://worldfreighthub.net/llms.txt` resolves (AI-crawler index).
- [ ] `https://worldfreighthub.net/robots.txt` resolves with sitemap pointer.
- [ ] `https://worldfreighthub.net/sitemap-index.xml` lists all 147 pages.
- [ ] `/directory/` renders 16 providers with unverified badges.
- [ ] `/get-quote/` form submits (see §4 below).
- [ ] `og.png` serves (social sharing image).

## 4. Quote form — FormSubmit activation

The `/get-quote/` form posts to **FormSubmit.co** (`hello@worldfreighthub.net`).

- The first submission triggers a **confirmation email** to `hello@worldfreighthub.net`.
- Open that email and click **"Activate"** — otherwise submissions silently fail.
- Alternative backends (if FormSubmit limits are an issue): Formspree, or a
  Cloudflare Pages Function (adds a serverless handler, still JS-free on the client).

## 5. Rollback

- Pages keeps a history of deployments; roll back from the Cloudflare dashboard.
- In git, `git revert` the offending commit and push — Pages rebuilds automatically.

## 6. Open items before go-live

- Saudi de minimis conflict (Commenda "none" vs multi-source "SAR 1,000") — needs
  ZATCA first-hand confirmation. See `docs/research-notes-2026-08-30.md`.
- Directory providers are all `unverified` — continue verification passes before
  promoting any to `verified`.
