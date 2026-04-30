"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      className={cn(
        "shrink-0 bg-black data-horizontal:h-[2px] data-horizontal:w-full data-vertical:h-full data-vertical:w-[2px]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
