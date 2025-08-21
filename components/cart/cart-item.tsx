import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartItem as CartItemType } from '@/lib/cart-store'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type CartItemProps = {
  item: CartItemType
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10)
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(item.id, newQuantity)
    }
  }

  const incrementQuantity = () => {
    setIsUpdating(true)
    updateQuantity(item.id, item.quantity + 1)
    setTimeout(() => setIsUpdating(false), 500)
  }

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      setIsUpdating(true)
      updateQuantity(item.id, item.quantity - 1)
      setTimeout(() => setIsUpdating(false), 500)
    }
  }

  return (
    <div className={cn("flex gap-4 py-6 border-b border-gray-100", isUpdating && "opacity-50")}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.productName}
          width={96}
          height={96}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              <Link href={`/products/${item.productId}`}>
                {item.productName}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {item.variant && `${item.variant.name}: ${item.variant.value}`}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-gray-500 hover:bg-transparent"
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-4 flex flex-1 items-end justify-between">
          <div className="flex items-center border border-gray-300 rounded-md">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-r-none text-gray-600 hover:bg-gray-100"
              onClick={decrementQuantity}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              aria-label="Quantity"
            />
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-l-none text-gray-600 hover:bg-gray-100"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}
