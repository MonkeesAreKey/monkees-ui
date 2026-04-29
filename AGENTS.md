# Agents Guide

Brutalist component library shipped as a **shadcn registry**. The Next app under `app/` is the demo / docs site that consumers land on.

## Stack

- Next.js **16.2.4** (App Router), React **19**
- Tailwind **v4** — config lives in `app/globals.css` (CSS-first, no `tailwind.config.*`)
- **Base UI** (`@base-ui/react`) for primitives — *not* Radix
- shadcn registry (CLI v4)
- `class-variance-authority` for variants, `clsx` + `tailwind-merge` via `cn()` in `lib/utils.ts`
- pnpm

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Single source of truth for components

Components live in **`components/ui/<name>.tsx`** — that is the only copy.

- The demo app imports from `@/components/ui/<name>`.
- `registry.json` ships the same file directly (paths point at `components/ui/*`).
- There is **no** `registry/` source tree. Do not recreate one. Do not duplicate components.

shadcn rewrites `@/...` aliases on the consumer side at install time, so the same file works for both the demo and downstream consumers.

## Adding a component

1. Drop the file in `components/ui/<name>.tsx`.
2. Use Base UI primitives (`@base-ui/react/<primitive>`), the `cn()` helper, and `cva` for variants.
3. Import via `@/lib/utils` and `@/components/ui/*` only — never relative paths.
4. Append an entry to `registry.json`:
   ```json
   {
     "name": "<name>",
     "type": "registry:ui",
     "title": "<Title>",
     "description": "<one line>",
     "files": [{ "path": "components/ui/<name>.tsx", "type": "registry:ui" }]
   }
   ```
5. Showcase it in `app/page.tsx` so the demo exercises it.

## Brutalist style conventions

Look at `components/ui/button.tsx` for the canonical pattern. The defaults:

- `border-2 border-black` on solid surfaces
- Hard offset shadow: `shadow-[4px_4px_0_0_#000]`
- Hover lifts the surface and grows the shadow:
  `hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000]`
- Active presses into the shadow:
  `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`
- UI text defaults to `font-bold uppercase tracking-wide` (link-like variants opt out)
- Use `rounded-lg` by default; drop to `rounded-[min(var(--radius-md),Npx)]` for compact sizes

## Aliases (`components.json`)

| alias              | path                  |
| ------------------ | --------------------- |
| `@/components`     | `components/`         |
| `@/components/ui`  | `components/ui/`      |
| `@/lib`            | `lib/`                |
| `@/lib/utils`      | `lib/utils.ts`        |
| `@/hooks`          | `hooks/`              |

## Commands

- `pnpm dev` — run the demo on localhost
- `pnpm build` — Next production build
- `pnpm lint`
- `pnpm shadcn build` — emit the public registry JSON for distribution

## Don'ts

- Don't import Radix (`@radix-ui/*`). This library is built on Base UI.
- Don't add a second copy of a component under `registry/` — `registry.json` reads `components/ui/` directly.
- Don't hand-edit `pnpm-lock.yaml`.
- Don't add comments that restate what the code does — only the non-obvious *why*.
