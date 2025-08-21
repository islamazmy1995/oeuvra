import { notFound } from 'next/navigation'
import { getProductBySlug, getProducts } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Share2 } from 'lucide-react'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-md bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                {product.badges?.map((badge) => (
                  <Badge key={badge} variant="outline">
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="mb-2 font-serif text-3xl font-bold">
                {product.name}
              </h1>
              <p className="mb-6 text-2xl font-medium text-primary">
                EGP {product.price.toLocaleString()}
              </p>
              <p className="mb-8 text-muted-foreground">
                {product.description}
              </p>

              {product.variants?.map((variant) => (
                <div key={variant.name} className="mb-6">
                  <h3 className="mb-2 text-sm font-medium">
                    {variant.name}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map((option) => (
                      <Button
                        key={option}
                        variant="outline"
                        className="rounded-full"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 text-xl"
                  >
                    -
                  </Button>
                  <div className="flex h-12 w-12 items-center justify-center border">
                    1
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 text-xl"
                  >
                    +
                  </Button>
                </div>
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 border-t pt-6">
                <h3 className="mb-4 font-medium">Product Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium">Category:</span>{' '}
                    {product.category}
                  </p>
                  <p>
                    <span className="font-medium">Material:</span> 14K Gold
                    Plated
                  </p>
                  <p>
                    <span className="font-medium">Shipping:</span> Free
                    shipping on all orders
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}