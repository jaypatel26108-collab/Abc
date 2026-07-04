export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  email: string;
}

export function createOrder(items: OrderItem[], email: string): Order {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return {
    id: `ORDER_${Date.now()}`,
    items,
    total,
    status: 'pending',
    createdAt: new Date(),
    email,
  };
}

export function calculateOrderTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}