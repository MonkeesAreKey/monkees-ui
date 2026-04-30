"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-md border-2 border-black bg-background shadow-[2px_2px_0_0_#000] outline-none transition-[transform,box-shadow] duration-150",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_#000]",
        "active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "data-checked:bg-primary data-checked:text-primary-foreground",
        "data-indeterminate:bg-primary data-indeterminate:text-primary-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <CheckIcon className="size-3.5 stroke-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
