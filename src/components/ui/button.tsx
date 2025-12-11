
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pastel-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent border-2 border-pastel-gold text-charcoal hover:bg-pastel-gold/10 hover:border-pastel-gold-dark",
        destructive:
          "bg-transparent border-2 border-destructive text-destructive hover:bg-destructive/10",
        outline:
          "border-2 border-pastel-gold bg-transparent text-charcoal hover:bg-pastel-gold/10",
        secondary:
          "bg-transparent border-2 border-pastel-gold/60 text-charcoal hover:bg-pastel-gold/10 hover:border-pastel-gold",
        ghost: "hover:bg-pastel-gold/10 text-charcoal border-2 border-transparent hover:border-pastel-gold/30",
        link: "text-charcoal underline-offset-4 hover:underline hover:text-pastel-gold-dark",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
