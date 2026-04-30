import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full rounded-lg border-2 border-black bg-background px-3 py-2 text-sm shadow-[4px_4px_0_0_#000] outline-none transition-[transform,box-shadow] duration-150 placeholder:text-muted-foreground",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000]",
        "focus:-translate-x-[1px] focus:-translate-y-[1px] focus:shadow-[5px_5px_0_0_#000] focus:ring-3 focus:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
