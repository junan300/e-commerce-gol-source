'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/CartContext';
import ProductCard from '@/components/product/ProductCard';

// This component will be used to add product to cart functionality
const ProductActions = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
    
    // Show a toast notification
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  };
  
  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to Cart
    </button>
  );
};

// Toast notification component
const Toast = ({ message }) => {
  return (
    <div id="toast" className="hidden fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {message}
    </div>
  );
};

export { ProductActions, Toast };
