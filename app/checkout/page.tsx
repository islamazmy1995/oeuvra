"use client"

import { useCartStore } from '@/lib/cart-store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'


// Define form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  country: z.string().min(2, 'Please select a country'),
  zip: z.string().min(3, 'Please enter a valid ZIP code'),
  saveInfo: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: 'United States', // Default country
      saveInfo: true, // Default to save info
    },
  })

  // Watch form values for real-time validation
  const watchAllFields = watch()

  // Calculate order summary
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal > 0 ? 0 : 0 // Free shipping
  const total = subtotal + shipping

  // Load saved address if available
  useEffect(() => {
    const savedAddress = localStorage.getItem('savedAddress')
    if (savedAddress) {
      const address = JSON.parse(savedAddress)
      Object.entries(address).forEach(([key, value]) => {
        setValue(key as keyof FormValues, value as string)
      })
    }
  }, [setValue])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsSubmitting(true)
      
      // Save address if user opted in
      if (data.saveInfo) {
        const { saveInfo, ...address } = data
        localStorage.setItem('savedAddress', JSON.stringify(address))
      } else {
        localStorage.removeItem('savedAddress')
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Clear cart after successful checkout
      clearCart()
      
      // Show success message
      toast({
        title: 'Order placed successfully!',
        description: 'Thank you for your purchase.',
      })
      
      // Redirect to success page
      router.push('/checkout/success')
    } catch (error) {
      console.error('Checkout failed:', error)
      toast({
        title: 'Error',
        description: 'There was an error processing your order. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
          <p className="mb-6 text-muted-foreground">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button onClick={() => router.push('/products')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 md:grid-cols-3">
        {/* Billing Information */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    placeholder="John"
                    className={errors.firstName ? 'border-destructive' : ''}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    placeholder="Doe"
                    className={errors.lastName ? 'border-destructive' : ''}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="john@example.com"
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="+1 (555) 123-4567"
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  {...register('address')}
                  placeholder="123 Main St"
                  className={errors.address ? 'border-destructive' : ''}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">
                    {errors.address.message}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    {...register('city')}
                    placeholder="New York"
                    className={errors.city ? 'border-destructive' : ''}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <select
                    id="country"
                    {...register('country')}
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.country ? 'border-destructive' : ''}`}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                  {errors.country && (
                    <p className="text-sm text-destructive">
                      {errors.country.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP/Postal Code *</Label>
                  <Input
                    id="zip"
                    {...register('zip')}
                    placeholder="10001"
                    className={errors.zip ? 'border-destructive' : ''}
                  />
                  {errors.zip && (
                    <p className="text-sm text-destructive">
                      {errors.zip.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="saveInfo"
                  {...register('saveInfo')}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="saveInfo"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save this information for next time
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <span className="mr-2 rounded bg-muted px-2 py-0.5 text-xs">
                        {item.quantity}
                      </span>
                      <span className="font-medium">{item.productName}</span>
                    </div>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-2" />
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground">
                By placing your order, you agree to our{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Credit / Debit Card
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pay securely using your credit or debit card
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    className="font-mono"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input id="nameOnCard" placeholder="John Doe" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  )
}