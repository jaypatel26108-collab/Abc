'use client';

import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="font-bold">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="border px-4 py-2 w-20"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className={`w-full py-3 rounded font-bold text-white transition ${
          added ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {added ? '✓ Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}