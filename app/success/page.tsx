'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/lib/cart-context';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Jewelry Store</h1>
        </div>
      </header>

      <main className="container mx-auto p-8 text-center">
        <div className="max-w-md mx-auto bg-green-50 border-2 border-green-500 rounded-lg p-8">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}