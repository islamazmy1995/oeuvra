import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProductsByCategory } from '@/data/products'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type CategoryPageProps = {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.category)
  const products = await getProductsByCategory(params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="mb-2 font-serif text-3xl font-bold">
              {category.name}
            </h1>
            <p className="text-muted-foreground">{category.description}</p>
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