import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductCard = ({ id, name, price, image, category, description }: ProductCardProps) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 hover:border-purple-600">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-2 right-2">
        <span className="px-2 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
          {category}
        </span>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1 truncate">{name}</h3>
        <p className="text-gray-400 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-300 font-bold">${price.toFixed(2)}</span>
          <Link 
            href={`/products/${id}`}
            className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium rounded hover:opacity-90 transition-opacity"
          >
            View Details
          </Link>
        </div>
      </div>
      
      {/* Quick Add Button - Appears on Hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button 
          onClick={async () => {
            // Add to cart functionality
            const { addItem } = (await import('@/lib/CartContext')).useCart();
            addItem({ id, name, price, image });
            
            // Show toast notification
            const toast = document.getElementById('toast');
            if (toast) {
              toast.classList.remove('hidden');
              setTimeout(() => {
                toast.classList.add('hidden');
              }, 3000);
            }
          }}
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded hover:opacity-90 transition-opacity flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
