"use client"

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { Loader2 } from "lucide-react"

type CartSummaryProps = {
  itemCount: number
  cartTotal: number
  isCheckingOut: boolean
  onCheckout: () => void
  onContinueShopping: () => void
}

export function CartSummary({
  itemCount,
  cartTotal,
  isCheckingOut,
  onCheckout,
  onContinueShopping,
}: CartSummaryProps) {
  const shipping = 0 // Free shipping
  const tax = cartTotal * 0.1 // 10% tax
  const orderTotal = cartTotal + shipping + tax

  return (
    <div className="mt-6 space-y-4">
      <div className="space-y-3 border-t border-gray-200 pt-6">
        <div className="flex justify-between text-base font-medium">
          <p>Subtotal</p>
          <p>{formatPrice(cartTotal)}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>Shipping</p>
          <p>{shipping === 0 ? 'Free' : formatPrice(shipping)}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>Tax</p>
          <p>{formatPrice(tax)}</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Order total</p>
          <p>{formatPrice(orderTotal)}</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={onCheckout}
          disabled={isCheckingOut || itemCount === 0}
          className="w-full rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isCheckingOut ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Proceed to checkout'
          )}
        </Button>
        <Button
          variant="outline"
          onClick={onContinueShopping}
          className="w-full rounded-md border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  )
}
