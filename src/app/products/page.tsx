'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { CartProvider } from '@/lib/CartContext';

// Import product data
import productData from '@/data/products.json';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  // Filter products by category
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  // Sort products
  const sortProducts = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts];
    
    switch (option) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 'featured' - no specific sort, use default order
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  return (
    <CartProvider>
      <Layout>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-white mb-4">Shop All Products</h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our collection of futuristic, crypto-inspired merchandise designed for the modern sports enthusiast.
              </p>
            </div>
            
            {/* Filters and Sorting */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => filterByCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Sort Options */}
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => sortProducts(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
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
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-white mb-2">No products found</h3>
                <p className="text-gray-400 mb-6">
                  We couldn&apos;t find any products matching your current filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setSortOption('featured');
                    setFilteredProducts(products);
                  }}
                  className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </CartProvider>
  );
}
