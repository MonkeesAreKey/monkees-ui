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
        "group/image-card overflow-hidden rounded-lg border-2 border-black bg-card shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0_0_#000]",
        "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
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
      className={cn("text-sm font-bold uppercase tracking-wide", className)}
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
        "border-t-2 border-black px-3 py-2 text-xs text-muted-foreground",
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
