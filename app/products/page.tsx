import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getProducts } from '@/data/products'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h1 className="font-serif text-3xl font-bold">All Products</h1>
            <div className="flex items-center gap-4">
              <select
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue="featured"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <Button variant="outline">Filter</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    EGP {product.price.toLocaleString()}
                  </p>
                  {product.badges && product.badges.length > 0 && (
                    <div className="mt-1 flex gap-1">
                      {product.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}