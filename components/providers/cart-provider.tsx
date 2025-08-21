'use client'

import { useEffect, useState } from 'react'
import { useCartStore } from '@/lib/cart-store'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <>{children}</>
}