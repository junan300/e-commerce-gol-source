'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Cart from '@/components/cart/Cart';
import { CartProvider } from '@/lib/CartContext';

export default function CartPage() {
  return (
    <CartProvider>
      <Layout>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>
            <Cart />
          </div>
        </div>
      </Layout>
    </CartProvider>
  );
}
