'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export function CartLink() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <span>🛒</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}