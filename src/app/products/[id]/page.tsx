'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ProductDetail from '@/components/product/ProductDetail';
import ProductCard from '@/components/product/ProductCard';
import { CartProvider } from '@/lib/CartContext';
import Link from 'next/link';

// Import product data
import productData from '@/data/products.json';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    if (params.id) {
      // Find the product with the matching ID
      const foundProduct = productData.find(p => p.id === params.id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, excluding current product)
        const related = productData
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
    }
  }, [params.id]);
  
  if (!product) {
    return (
      <CartProvider>
        <Layout>
          <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
              <p className="text-gray-400 mb-8">
                We couldn't find the product you're looking for.
              </p>
              <Link 
                href="/products" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </Layout>
      </CartProvider>
    );
  }
  
  return (
    <CartProvider>
      <Layout>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            {/* Breadcrumb Navigation */}
            <div className="mb-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-blue-300 transition-colors">
                Products
              </Link>
              <span className="mx-2">/</span>
              <Link 
                href={`/products/category/${product.category}`} 
                className="hover:text-blue-300 transition-colors"
              >
                {product.category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{product.name}</span>
            </div>
            
            {/* Product Detail */}
            <ProductDetail
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              images={product.images}
              category={product.category}
              features={product.features}
              inStock={product.inStock}
            />
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard
                      key={relatedProduct.id}
                      id={relatedProduct.id}
                      name={relatedProduct.name}
                      price={relatedProduct.price}
                      image={relatedProduct.images[0]}
                      category={relatedProduct.category}
                      description={relatedProduct.description}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </CartProvider>
  );
}
