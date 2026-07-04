'use client';

import Link from 'next/link';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Jewelry Store</h1>
          <Link href="/cart" className="bg-blue-600 px-4 py-2 rounded">
            Cart
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">{product.name}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600">${(product.price / 100).toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}