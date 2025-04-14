# SOLGOL E-Commerce Website

A futuristic, crypto-inspired e-commerce site for branded merchandise, built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

SOLGOL is an e-commerce platform for branded merchandise that's part of a sports betting ecosystem. The site features a futuristic, crypto-inspired design with a color scheme of purple, black, and light blue.

### Features

- Responsive design that works seamlessly on mobile, tablet, and desktop
- Product browsing with filtering and sorting capabilities
- Product detail pages with image galleries
- Shopping cart functionality with quantity controls
- Mock checkout process with shipping and payment forms
- Newsletter signup
- Contact form

## Installation & Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd solgol-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project follows a modular structure for maintainability and scalability:

```
solgol-ecommerce/
├── public/               # Static assets
│   └── images/           # Product and site images
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── cart/         # Cart-related components
│   │   ├── checkout/     # Checkout-related components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── product/      # Product-related components
│   │   └── ui/           # Reusable UI components
│   ├── assets/           # Internal assets
│   │   ├── images/       # Image assets
│   │   └── icons/        # Icon assets
│   ├── data/             # Mock data
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and context providers
└── ...                   # Configuration files
```

## Component Structure

### Layout Components

- **Header**: Navigation bar with responsive mobile menu
- **Footer**: Site footer with links and newsletter signup
- **Layout**: Wrapper component that includes Header and Footer

### Product Components

- **ProductCard**: Card display for products in listings
- **ProductDetail**: Detailed product view with image gallery
- **ProductActions**: Handles add-to-cart functionality

### Cart Components

- **Cart**: Main cart component showing all items
- **CartItem**: Individual item in the cart with quantity controls

### Checkout Components

- **CheckoutForm**: Multi-step form for shipping and payment information

### Context Providers

- **CartContext**: Manages cart state across the application

## Adding Products

The product data is stored in `src/data/products.json`. To add or modify products:

1. Open the `products.json` file
2. Follow the existing product structure:

```json
{
  "id": "unique-product-id",
  "name": "Product Name",
  "price": 29.99,
  "description": "Product description text",
  "features": ["Feature 1", "Feature 2"],
  "category": "Category Name",
  "inStock": true,
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ]
}
```

3. Add new product entries or modify existing ones
4. Save the file and restart the development server if necessary

## Styling System

The project uses Tailwind CSS for styling with a custom color palette:

- Primary colors: Purple, Black, and Light Blue
- The design follows a futuristic, crypto-inspired aesthetic
- Custom responsive classes are added in `globals.css`

## Future Integration Points

### Payment Gateway Integration

The checkout process is currently mocked. To integrate a real payment gateway:

1. Replace the mock checkout in `CheckoutForm.tsx` with a real payment provider
2. Potential options include Stripe, PayPal, or crypto payment processors
3. Update the order confirmation process to handle real transactions

### Backend API Integration

To connect to a real backend:

1. Create API services in the `lib` directory
2. Replace the local JSON data with API calls
3. Update the cart and checkout flow to persist data

### Crypto Functionality

For future crypto integrations:

1. Add wallet connection functionality
2. Implement crypto payment options
3. Consider NFT-based loyalty programs or exclusive products

## Deployment

The project is configured for easy deployment on Vercel or Netlify:

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

### Netlify Deployment

```bash
npm install -g netlify-cli
netlify deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
