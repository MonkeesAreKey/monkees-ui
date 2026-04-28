import { Button } from "@/components/ui/button"

const variants = [
  "default",
  "outline",
  "secondary",
  "accent",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "default", "lg"] as const

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Monkees UI</h1>
        <p className="text-muted-foreground">
          Component showcase. Edit <code>app/page.tsx</code> to add more.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button — variants</h2>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button — sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((s) => (
            <Button key={s} size={s}>
              {s}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button — disabled</h2>
        <div className="flex flex-wrap gap-3">
          <Button disabled>default</Button>
          <Button variant="outline" disabled>
            outline
          </Button>
          <Button variant="destructive" disabled>
            destructive
          </Button>
        </div>
      </section>
    </main>
  )
}
