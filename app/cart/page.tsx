'use client';

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gray-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <Link href="/" className="text-blue-400">Back to Store</Link>
          </div>
        </header>
        <main className="container mx-auto p-8 text-center">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <Link href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <Link href="/" className="text-blue-400">Back to Store</Link>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            {cart.map((item) => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;
              
              return (
                <div key={item.productId} className="border-b pb-4 mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-gray-600">${(product.price / 100).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                      className="border px-2 py-1 w-16"
                    />
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-100 p-6 rounded h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="mb-4 pb-4 border-b">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${(total / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${(total / 100).toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="w-full block text-center bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}