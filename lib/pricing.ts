export interface Price {
  amount: number;
  currency: string;
  formatted: string;
}

export function calculatePrice(amountInCents: number): Price {
  return {
    amount: amountInCents,
    currency: 'USD',
    formatted: `$${(amountInCents / 100).toFixed(2)}`,
  };
}

export function calculateTotal(items: Array<{ price: number; quantity: number }>): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateTax(amount: number, rate: number = 0.08): number {
  return Math.round(amount * rate);
}

export function calculateDiscount(amount: number, percentage: number): number {
  return Math.round(amount * (percentage / 100));
}