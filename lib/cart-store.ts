import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from '@/components/ui/use-toast'

export type CartItem = {
  id: string
  productId: string
  productName: string
  price: number
  quantity: number
  image: string
  variant?: {
    name: string
    value: string
  }
  customizations?: {
    charms: string[]
  }
}

type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'id'>) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          toast({
            title: 'Added to cart',
            description: `${item.productName} has been added to your cart.`,
          })
          return {
            items: [...state.items, { ...item, id: Date.now().toString() }],
          }
        }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const item = state.items.find((item) => item.id === id)
          if (item) {
            toast({
              title: 'Cart updated',
              description: `Updated quantity for ${item.productName}.`,
            })
          }
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const item = state.items.find((item) => item.id === id)
          if (item) {
            toast({
              title: 'Removed from cart',
              description: `${item.productName} has been removed from your cart.`,
            })
          }
          return {
            items: state.items.filter((item) => item.id !== id),
          }
        }),
      clearCart: () => {
        set({ items: [] })
        toast({
          title: 'Cart cleared',
          description: 'Your cart has been cleared.',
        })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)