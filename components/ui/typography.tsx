import * as React from "react"

import { cn } from "@/lib/utils"

function TypographyH1({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="typography-h1"
      className={cn(
        "font-heading scroll-m-20 text-4xl font-normal uppercase tracking-[0.04em] lg:text-5xl",
        className
      )}
      {...props}
    />
  )
}

function TypographyH2({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="typography-h2"
      className={cn(
        "font-heading scroll-m-20 border-b-2 border-black pb-2 text-3xl font-normal uppercase tracking-[0.04em] first:mt-0",
        className
      )}
      {...props}
    />
  )
}

function TypographyH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="typography-h3"
      className={cn(
        "font-heading scroll-m-20 text-2xl font-normal uppercase tracking-[0.04em]",
        className
      )}
      {...props}
    />
  )
}

function TypographyH4({
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="typography-h4"
      className={cn(
        "font-heading scroll-m-20 text-xl font-normal uppercase tracking-[0.04em]",
        className
      )}
      {...props}
    />
  )
}

function TypographyP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-p"
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
}

function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      data-slot="typography-blockquote"
      className={cn(
        "mt-6 border-l-4 border-black pl-6 italic",
        className
      )}
      {...props}
    />
  )
}

function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<"code">) {
  return (
    <code
      data-slot="typography-inline-code"
      className={cn(
        "relative rounded-md border-2 border-black bg-muted px-1.5 py-0.5 font-mono text-sm shadow-[2px_2px_0_0_#000]",
        className
      )}
      {...props}
    />
  )
}

function TypographyLead({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-lead"
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  )
}

function TypographyLarge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="typography-large"
      className={cn("text-lg font-bold", className)}
      {...props}
    />
  )
}

function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      data-slot="typography-small"
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  )
}

function TypographyMuted({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="typography-muted"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
}
