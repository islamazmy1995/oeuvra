"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CheckoutSuccessPage() {
  const router = useRouter()

  // In a real app, you might want to verify the order with your backend
  // and show order details here
  
  useEffect(() => {
    // Clear any cart-related state if needed
    // This will run only on the client side
  }, [])

  return (
    <div className="container flex min-h-[calc(100vh-200px)] flex-col items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold">
            Order Confirmed!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being
            processed.
          </p>
          
          <div className="space-y-2 rounded-lg bg-muted p-4 text-left">
            <p className="font-medium">What's next?</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>You'll receive an order confirmation email shortly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>We'll notify you when your order has shipped.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Estimated delivery: 3-5 business days</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={() => router.push('/account/orders')}
              className="w-full"
            >
              View Order Status
            </Button>
            <Button
              onClick={() => router.push('/products')}
              variant="outline"
              className="w-full"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </div>
          
          <p className="pt-4 text-sm text-muted-foreground">
            Need help?{' '}
            <a href="/contact" className="text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}