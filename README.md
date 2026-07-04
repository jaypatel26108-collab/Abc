# Jewelry Store

A modern e-commerce platform for selling jewelry built with Next.js, React, and Stripe payment processing.

## Features

- Product catalog with detailed product pages
- Shopping cart functionality
- Secure checkout with Stripe integration
- Order management
- Admin dashboard
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── product/         # Product pages
│   ├── cart/            # Cart page
│   ├── checkout/        # Checkout page
│   ├── success/         # Order success page
│   └── admin/           # Admin dashboard
├── lib/                 # Utility functions
├── public/              # Static assets
└── components/          # React components
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Stripe** - Payment processing
- **TypeScript** - Type safety

## License

MIT