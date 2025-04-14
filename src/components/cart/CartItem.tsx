import React from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';

const CartItem = ({ id, name, price, image, quantity }: {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}) => {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex items-center py-4 border-b border-gray-800">
      {/* Product Image */}
      <div className="relative h-20 w-20 flex-shrink-0 rounded overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Product Info */}
      <div className="ml-4 flex-grow">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-blue-300 font-bold">${price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center border border-gray-700 rounded-md mx-4">
        <button
          onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
          className="px-2 py-1 text-gray-300 hover:text-white focus:outline-none"
        >
          -
        </button>
        <span className="px-2 py-1 text-white">{quantity}</span>
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="px-2 py-1 text-gray-300 hover:text-white focus:outline-none"
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <div className="text-right min-w-[80px]">
        <p className="text-white font-bold">${(price * quantity).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(id)}
        className="ml-4 text-gray-400 hover:text-red-500 focus:outline-none"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
