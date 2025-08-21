"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCartStore } from "@/lib/cart-store"
import { CartItem } from "./cart-item"
import { CartSummary } from "./cart-summary"
import { CartEmpty } from "./cart-empty"

type CartSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const { items, updateQuantity, removeItem } = useCartStore()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true)
      router.push("/checkout")
    } catch (error) {
      console.error("Checkout failed:", error)
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <div className="flex-1 overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <SheetTitle className="text-2xl font-bold text-gray-900">
                Your Cart
              </SheetTitle>
              {itemCount > 0 && (
                <p className="text-sm text-gray-500">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 -mt-2 -mr-2"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {itemCount > 0 ? (
            <>
              <div className="mt-8 flex-1 overflow-y-auto">
                <ScrollArea className="h-full">
                  <div className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <CartItem 
                        key={item.id} 
                        item={item} 
                        updateQuantity={updateQuantity} 
                        removeItem={removeItem} 
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <CartSummary 
                  itemCount={itemCount}
                  cartTotal={cartTotal}
                  isCheckingOut={isCheckingOut}
                  onCheckout={handleCheckout}
                  onContinueShopping={() => onOpenChange(false)}
                />
              </div>
            </>
          ) : (
            <CartEmpty onContinueShopping={() => onOpenChange(false)} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
