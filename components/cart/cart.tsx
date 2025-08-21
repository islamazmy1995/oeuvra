"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/cart-store"
import { CartItem as CartItemComponent } from "./cart-item"
import { CartSummary } from "./cart-summary"
import { CartEmpty } from "./cart-empty"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const { items, clearCart, updateQuantity, removeItem } = useCartStore()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Use any type to avoid type conflicts with the store
  const itemCount = items.reduce((total: number, item: any) => total + item.quantity, 0)
  const cartTotal = items.reduce((total: number, item: any) => total + (item.price * item.quantity), 0)

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

  // Transform store item to component item format
  const transformItem = (item: any) => ({
    id: item.id,
    productId: item.productId || item.id,
    name: item.name || item.productName || '',
    productName: item.productName || item.name || '',
    price: item.price,
    quantity: item.quantity,
    image: item.image || '/placeholder-image.jpg'
  })

  if (!isMounted) {
    return null
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <div className="flex flex-col flex-1">
          <SheetHeader className="space-y-2.5 pr-6">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-semibold">
                Your Cart {itemCount > 0 && `(${itemCount})`}
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8"
                aria-label="Close cart"
              >
                <span className="sr-only">Close cart</span>
                <span aria-hidden="true">×</span>
              </Button>
            </div>
            <Separator />
          </SheetHeader>

          {itemCount > 0 ? (
            <>
              <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                <ScrollArea className="h-full pr-4">
                  <div className="flex flex-col gap-4">
                    {items.map((item: any) => (
                      <CartItemComponent 
                        key={item.id} 
                        item={transformItem(item)} 
                        updateQuantity={updateQuantity} 
                        removeItem={removeItem} 
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <CartSummary 
                itemCount={itemCount}
                cartTotal={cartTotal}
                isCheckingOut={isCheckingOut}
                onCheckout={handleCheckout}
                onContinueShopping={onClose}
              />
            </>
          ) : (
            <CartEmpty onContinueShopping={onClose} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}