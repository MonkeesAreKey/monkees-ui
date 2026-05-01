# Monkees UI

Monkees UI is the component library for the Monkees ecosystem. It provides reusable React components with the Monkees visual style so apps, dashboards, mint pages, and community tools can share a consistent UI.

The project is published as a **shadcn registry**: consumers can install individual components into their own codebase instead of depending on a packaged black box.

## What is in this repo?

- `components/ui/*` — the source of truth for every component
- `registry.json` — the shadcn registry definition
- `app/` — the public demo/docs site showing the components in use
- `public/` — static assets used by the demo site

## Install a component

Use the shadcn CLI with the registry URL:

```bash
npx shadcn@latest add "https://monkees-ui.vercel.app/r/button.json"
```

Replace `button` with any available component name from `registry.json`.

## Local development

Install dependencies:

```bash
pnpm install
```

Run the demo site:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run linting:

```bash
pnpm lint
```

## Tech stack

- Next.js App Router
- React
- Tailwind CSS v4
- Base UI primitives
- shadcn registry
- class-variance-authority

## Project goal

The goal is simple: make it easy for any Monkees project to copy polished, consistent UI components and move faster while keeping the same brand feel across the ecosystem.
