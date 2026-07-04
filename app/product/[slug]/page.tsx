'use client';

import { products } from '@/lib/products';
import { AddToCartButton } from './AddToCartButton';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link href="/" className="text-blue-600">Back to Store</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jewelry Store</h1>
          <Link href="/cart" className="text-blue-400">Cart</Link>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <Link href="/" className="text-blue-600 mb-8 inline-block">← Back to Store</Link>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-200 h-96 rounded flex items-center justify-center">
            <span className="text-gray-500 text-2xl">{product.name}</span>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            
            <div className="mb-8">
              <p className="text-3xl font-bold text-blue-600 mb-2">${(product.price / 100).toFixed(2)}</p>
              <p className="text-gray-500">SKU: {product.id}</p>
            </div>

            <AddToCartButton product={product} />

            <div className="mt-12 p-6 bg-gray-100 rounded">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>High-quality materials</li>
                <li>Carefully crafted</li>
                <li>Unique design</li>
                <li>Free shipping on orders over $100</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}