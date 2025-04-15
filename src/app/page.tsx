'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { CartProvider } from '@/lib/CartContext';

// Import product data
import productData from '@/data/products.json';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  category: string;
  inStock: boolean;
  images: string[];
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Select 4 random products to feature
    const shuffled = [...productData].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 4));
  }, []);

  return (
    <CartProvider>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
                The Future of Sports Merchandise
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Exclusive apparel and collectibles for the crypto-savvy sports enthusiast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity text-center"
                >
                  Shop Collection
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover our most popular items, designed for the future-focused sports fan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category}
                  description={product.description}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/products" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity inline-block"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Shop by Category</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Browse our collection by category to find exactly what you&apos;re looking for.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Apparel Category */}
              <Link href="/products/category/Apparel" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Apparel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Apparel</h3>
                    <p className="text-gray-300 mb-4">T-shirts, hoodies, and more</p>
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors flex items-center">
                      Shop Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Accessories Category */}
              <Link href="/products/category/Accessories" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Accessories"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                    <p className="text-gray-300 mb-4">Caps, bags, and essentials</p>
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors flex items-center">
                      Shop Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Collectibles Category */}
              <Link href="/products/category/Collectibles" className="group">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Collectibles"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Collectibles</h3>
                    <p className="text-gray-300 mb-4">Posters, mugs, and memorabilia</p>
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors flex items-center">
                      Shop Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
              <p className="text-gray-200 mb-8">
                Subscribe to our newsletter for exclusive offers, early access to new products, and updates from the SOLGOL universe.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-gray-400 mt-4 text-sm">
                By subscribing, you agree to receive marketing emails from SOLGOL. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </CartProvider>
  );
}
