import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border-2 border-black text-sm font-bold whitespace-nowrap outline-none select-none transition-[box-shadow,filter] duration-300 ease-in-out motion-reduce:transition-none hover:brightness-95 hover:shadow-[inset_0_0_0_#0000,0_0_0_#0000] active:brightness-90 active:shadow-[inset_0_0_0_#0000,0_0_0_#0000] focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:stroke-2 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_-4px_0_#0003,0_4px_0_#0003]",
        outline:
          "bg-background text-foreground shadow-[inset_0_-4px_0_#0003,0_4px_0_#0003] hover:brightness-100",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_-4px_0_#0003,0_4px_0_#0003]",
        ghost:
          "border-transparent shadow-none hover:bg-muted",
        destructive:
          "bg-destructive text-white shadow-[inset_0_-4px_0_#0003,0_4px_0_#0003]",
        accent:
          "bg-accent text-accent-foreground shadow-[inset_0_-4px_0_#0003,0_4px_0_#0003]",
        link: "border-transparent shadow-none normal-case tracking-normal text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-1.5 px-5 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-10",
        "icon-xs":
          "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8",
        "icon-lg": "size-12",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        size: ["icon", "icon-xs", "icon-sm", "icon-lg"],
        className: "bg-background text-accent hover:bg-accent hover:text-accent-foreground",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
