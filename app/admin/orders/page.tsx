'use client';

export default function AdminOrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Admin - Orders</h1>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <p className="text-gray-600">No orders yet.</p>
        </div>
      </main>
    </div>
  );
}