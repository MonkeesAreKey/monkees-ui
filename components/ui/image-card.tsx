"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

function ImageCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card"
      className={cn(
        "group/image-card overflow-hidden rounded-lg border border-black/15 bg-card shadow-[0_3px_0_#00000014,0_8px_18px_#00000008]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function ImageCardImage({
  className,
  alt = "",
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      data-slot="image-card-image"
      alt={alt}
      className={cn("aspect-square w-full object-cover", className)}
      {...props}
    />
  )
}

function ImageCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-content"
      className={cn("space-y-1.5 p-3", className)}
      {...props}
    />
  )
}

function ImageCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-header"
      className={cn("flex items-center justify-between gap-2", className)}
      {...props}
    />
  )
}

function ImageCardTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="image-card-title"
      className={cn("font-sans text-base font-bold", className)}
      {...props}
    />
  )
}

function ImageCardBadge({
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge
      data-slot="image-card-badge"
      variant="outline"
      className={cn("shrink-0 text-xs", className)}
      {...props}
    />
  )
}

function ImageCardSubtitle({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="image-card-subtitle"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function ImageCardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="image-card-footer"
      className={cn(
        "border-t-2 border-black/10 bg-muted/30 px-3 py-2 text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ImageCard,
  ImageCardImage,
  ImageCardContent,
  ImageCardHeader,
  ImageCardTitle,
  ImageCardBadge,
  ImageCardSubtitle,
  ImageCardFooter,
}
