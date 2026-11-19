"use client"

import * as React from "react"
import { CopyIcon, CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function CodeBlock({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block"
      className={cn(
        "relative rounded-lg border border-black/15 bg-background shadow-[0_3px_0_#00000014,0_8px_18px_#00000008]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CodeBlockHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-block-header"
      className={cn(
        "flex items-center justify-between border-b-2 border-black/10 px-4 py-2 text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CodeBlockBody({
  className,
  ...props
}: React.ComponentProps<"pre">) {
  return (
    <pre
      data-slot="code-block-body"
      className={cn(
        "overflow-x-auto p-4 text-sm leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function CodeBlockCopy({
  value,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Button>, "children"> & {
  value: string
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(() => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [value])

  return (
    <Button
      data-slot="code-block-copy"
      variant="ghost"
      size="icon-xs"
      className={className}
      onClick={handleCopy}
      {...props}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
    </Button>
  )
}

export { CodeBlock, CodeBlockHeader, CodeBlockBody, CodeBlockCopy }
