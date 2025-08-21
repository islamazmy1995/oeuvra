"use client"

import { ShoppingBag } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

type CartButtonProps = Omit<ButtonProps, 'variant' | 'size'> & {
  iconClassName?: string
  showBadge?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}

export function CartButton({
  className,
  iconClassName,
  showBadge = true,
  variant = "ghost",
  size = "icon",
  onClick,
  ...props
}: CartButtonProps) {
  const itemCount = useCartStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
  )

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "relative h-10 w-10 rounded-full",
        variant === "ghost" && "hover:bg-gray-100",
        className
      )}
      onClick={onClick}
      aria-label={`${itemCount} items in cart`}
      {...props}
    >
      <ShoppingBag 
        className={cn("h-5 w-5 text-gray-700", iconClassName)} 
        aria-hidden="true" 
      />
      {showBadge && itemCount > 0 && (
        <span 
          className={cn(
            "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white",
            itemCount > 9 ? "px-0.5" : "px-1"
          )}
          aria-hidden="true"
        >
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Button>
  )
}