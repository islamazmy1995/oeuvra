"use client"

import { useState } from "react"
import Cart from "@/components/cart/cart"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div>
      <h1>Welcome to My Shop</h1>

      <Button onClick={() => setIsCartOpen(true)}>Open Cart</Button>

      {/* Cart component as overlay */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  )
}
