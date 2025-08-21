'use client';

import Link from 'next/link';
import Image from "next/image";
import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';

// Animation variants for better organization
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const}
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const collections = [
    {
      title: 'Necklaces',
      href: '/categories/necklaces',
      description: 'Elegant pieces that make a statement',
      items: '24 Items',
      image: '/images/categories/necklace.webp',
    },
    {
      title: 'Bracelets',
      href: '/categories/bracelets',
      description: 'Delicate designs for every occasion',
      items: '18 Items',
      image: '/images/categories/necklace.webp',
    },
    {
      title: 'Rings',
      href: '/categories/rings',
      description: 'Symbols of love and commitment',
      items: '32 Items',
      image: '/images/categories/necklace.webp',
    },
    {
      title: 'Earrings',
      href: '/categories/earrings',
      description: 'Timeless beauty for every ear',
      items: '28 Items',
      image: '/images/categories/necklace.webp',
    },
    {
      title: 'Anklets',
      href: '/categories/anklets',
      description: 'Delicate adornments for your feet',
      items: '15 Items',
      image: '/images/categories/necklace.webp',
    },
    {
      title: 'Sets',
      href: '/categories/sets',
      description: 'Complete coordinated collections',
      items: '12 Items',
      image: '/images/categories/necklace.webp',
    }
  ];

  // Best sellers data
  const bestSellers = [
    {
      id: 1,
      name: 'Ankh Pendant Necklace',
      price: '1,200',
      originalPrice: '1,500',
      category: 'Necklaces',
      rating: 4.8,
      reviewCount: 24,
      image: '/images/categories/necklace.webp',
      isOnSale: true,
    },
    {
      id: 2,
      name: 'Eye of Horus Ring',
      price: '950',
      category: 'Rings',
      rating: 4.9,
      reviewCount: 18,
      image: '/images/categories/necklace.webp',
      isOnSale: false,
    },
    {
      id: 3,
      name: 'Lotus Bangle Bracelet',
      price: '1,500',
      category: 'Bracelets',
      rating: 4.7,
      reviewCount: 15,
      image: '/images/categories/necklace.webp',
      isOnSale: false,
    },
    {
      id: 4,
      name: 'Scarab Beetle Earrings',
      price: '850',
      category: 'Earrings',
      rating: 4.9,
      reviewCount: 32,
      image: '/images/categories/necklace.webp',
      isOnSale: false,
    },
  ];

  // Features data
  const features = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Rapid Shipping',
      description: 'Worldwide delivery with express options'
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Secure Payment',
      description: '100% secure payment methods'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Authentic Materials',
      description: 'Ethically sourced gemstones and metals'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative h-screen min-h-[500px] max-h-[800px] overflow-hidden">
          {/* Background with proper sizing */}
          <div className="absolute inset-0 z-0">
            <div className="h-full w-full bg-[url('/images/logo/hero.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <motion.div
                className="max-w-xl lg:max-w-2xl xl:max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h1 
                  className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Timeless Elegance in Every Piece
                </motion.h1>
                
                <motion.p 
                  className="mb-6 sm:mb-8 max-w-md lg:max-w-lg text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discover our exclusive collection of handcrafted Egyptian Oeuvra, where ancient heritage meets modern design.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 px-6 py-3 text-base font-medium">
                      <Link href="/products">Shop Collection</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white px-6 py-3 text-base font-medium"
                    >
                      <Link href="/customize">Custom Design</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm sm:text-base text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { text: "Handcrafted in Egypt" },
                    { text: "Free Shipping Worldwide" }
                  ].map((badge, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <div className="h-10 w-6 rounded-full border-2 border-white/50 p-1">
                <motion.div
                  className="h-2 w-2 rounded-full bg-white"
                  animate={{ y: [0, 8], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              {...fadeInUp}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium tracking-wider text-sm sm:text-base">COLLECTIONS</span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                Discover Our Collections
              </h2>
              <div className="mt-3 h-1 w-16 sm:w-20 bg-amber-500 mx-auto"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.href}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Link href={collection.href} className="block">
                    <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-100 relative">
                      <Image
                        src={collection.image} 
                        alt={collection.title}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{collection.title}</h3>
                          <p className="text-amber-200 mb-2 text-sm sm:text-base">{collection.description}</p>
                          <span className="text-sm text-white/80">{collection.items}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-2 sm:px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        Shop Now
                        <svg className="ml-1 h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/images/categories/foot.webp"
                    alt="Egyptian Heritage Craftsmanship"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-1/2 h-2/3 rounded-2xl border-4 border-amber-500 z-0 hidden md:block"></div>
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-1/3 h-1/2 bg-amber-100 rounded-2xl -z-10 hidden md:block"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="text-amber-600 font-medium tracking-wider text-sm sm:text-base">OUR STORY</span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                  Handcrafted with Ancient Egyptian Heritage
                </h2>
                <div className="mt-3 h-1 w-16 sm:w-20 bg-amber-500"></div>

                <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Founded in the heart of Cairo, Oeuvra brings to life the rich heritage of ancient Egyptian craftsmanship.
                  Our master artisans combine traditional techniques passed down through generations with contemporary design
                  to create timeless pieces that tell a story.
                </p>

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              {...fadeInUp}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium tracking-wider text-sm sm:text-base">BEST SELLERS</span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
                Our Most Popular Pieces
              </h2>
              <div className="mt-3 h-1 w-16 sm:w-20 bg-amber-500 mx-auto"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {bestSellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      {product.isOnSale && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Sale
                          </span>
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <span className="text-xs sm:text-sm text-amber-600">{product.category}</span>
                      <h3 className="mt-1 text-base sm:text-lg font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                      <div className="mt-2 flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-xs sm:text-sm text-gray-500">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <p className="text-base sm:text-lg font-bold text-gray-900">EGP {product.price}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">EGP {product.originalPrice}</p>
                        )}
                      </div>
                      <button className="mt-3 sm:mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 sm:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                <Link href="/products">View All Products</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}