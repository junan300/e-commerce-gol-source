import React from 'react';
import Link from 'next/link';
import CartItem from './CartItem';
import { useCart } from '@/lib/CartContext';

const Cart = () => {
  const { state, clearCart } = useCart();
  const { items, totalItems, totalPrice } = state;

  if (items.length === 0) {
    return (
      <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg border border-gray-800">
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Looks like you haven&apos;t added any items to your cart yet.</p>
          <Link href="/products" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart ({totalItems} items)</h2>
        <button 
          onClick={clearCart}
          className="text-gray-400 hover:text-red-500 text-sm flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-1">
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Shipping</span>
          <span className="text-white font-medium">Calculated at checkout</span>
        </div>
        <div className="flex justify-between mb-6">
          <span className="text-gray-400">Tax</span>
          <span className="text-white font-medium">Calculated at checkout</span>
        </div>
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Total</span>
          <span className="text-blue-300">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Link 
          href="/checkout"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
        >
          Proceed to Checkout
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        {/* Continue Shopping Link */}
        <div className="text-center mt-4">
          <Link href="/products" className="text-blue-300 hover:text-blue-200 transition-colors">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
