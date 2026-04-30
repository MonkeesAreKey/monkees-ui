"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

import { cn } from "@/lib/utils"

function Tabs({ ...props }: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border-2 border-black bg-muted p-1 shadow-[4px_4px_0_0_#000]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1.5 text-sm font-bold uppercase tracking-wide outline-none transition-colors select-none",
        "text-muted-foreground hover:text-foreground",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "data-selected:bg-background data-selected:text-foreground data-selected:border-2 data-selected:border-black data-selected:shadow-[2px_2px_0_0_#000]",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "mt-2 rounded-lg border-2 border-black bg-background p-4 shadow-[4px_4px_0_0_#000] outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
