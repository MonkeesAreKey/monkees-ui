"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-black bg-muted shadow-[2px_2px_0_0_#000] outline-none transition-[transform,box-shadow,background-color] duration-150",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_#000]",
        "active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "data-checked:bg-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-4 rounded-full border-2 border-black bg-background transition-transform duration-150",
          "data-checked:translate-x-[calc(100%+2px)] data-unchecked:translate-x-0.5"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
