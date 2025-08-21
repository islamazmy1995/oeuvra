"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-amber-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/patterns/diamond-pattern.svg')] opacity-10"></div>
        </div>
        <div className="text-center relative z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Oeuvra</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">

            Oeuvra is an Egyptian brand specializing in handcrafted jewelry and accessories, from elegant necklaces to unique bracelets and rings. We combine traditional inspiration with modern design, offering high-quality pieces and fast shipping across Egypt.          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Crafting Timeless Beauty</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2023, Oeuvra is an Egyptian jewelry brand dedicated to creating modern pieces inspired by our rich heritage. From necklaces to rings, each design blends timeless elegance with contemporary style. We pride ourselves on using quality materials, offering fast shipping, and delivering jewelry that tells a story of culture and Craftsmanship
            </p>
            <p className="text-gray-600 leading-relaxed">
              We source only the finest materials, ensuring that every piece not only looks beautiful but stands the test of time.
              Our commitment to quality and ethical sourcing is at the heart of everything we do.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/icons/about-icon.webp"
              alt="Crafting Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );

}
