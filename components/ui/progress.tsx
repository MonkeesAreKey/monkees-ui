"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  ...props
}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("relative", className)}
      {...props}
    >
      <ProgressPrimitive.Track
        className="relative h-3 w-full overflow-hidden rounded-full border-2 border-black/10 bg-muted"
      >
        <ProgressPrimitive.Indicator
          className="h-full bg-accent transition-[width] duration-300 motion-reduce:transition-none"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
