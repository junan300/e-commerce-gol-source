'use client';

import Layout from '@/components/layout/Layout';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import { CartProvider } from '@/lib/CartContext';

export default function CheckoutPage() {
  return (
    <CartProvider>
      <Layout>
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
            <CheckoutForm />
          </div>
        </div>
      </Layout>
    </CartProvider>
  );
}
