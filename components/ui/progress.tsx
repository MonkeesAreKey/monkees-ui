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
        className="relative h-4 w-full overflow-hidden rounded-full border-2 border-black bg-muted shadow-[2px_2px_0_0_#000]"
      >
        <ProgressPrimitive.Indicator
          className="h-full bg-primary transition-[width] duration-300"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
