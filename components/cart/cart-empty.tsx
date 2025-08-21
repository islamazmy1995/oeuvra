import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type CartEmptyProps = {
  onContinueShopping: () => void
}

export function CartEmpty({ onContinueShopping }: CartEmptyProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <ShoppingBag className="h-10 w-10 text-gray-400" aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
        <p className="text-sm text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Button
          onClick={onContinueShopping}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Continue Shopping
        </Button>
        <Link href="/collections">
          <Button
            variant="outline"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Browse Collections
          </Button>
        </Link>
      </div>
    </div>
  )
}
