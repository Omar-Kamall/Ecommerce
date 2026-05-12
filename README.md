# Ecommerce Application

A full-stack ecommerce web application built with Next.js, React, TypeScript, and MongoDB. This project provides a complete online shopping experience with user authentication, product management, shopping cart functionality, and more.

## Features

- **User Authentication**: Secure login and registration system using JWT tokens
- **Product Management**: View, add, and manage products with categories, pricing, and stock
- **Shopping Cart**: Add products to cart, view cart items, and manage quantities
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **API Routes**: RESTful API endpoints for products and user management
- **Database Integration**: MongoDB with Mongoose for data persistence
- **Modern UI Components**: Custom components with Headless UI and React Hook Form

## Tech Stack

### Frontend
- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling
- **Headless UI** - Accessible UI components

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- MongoDB (local or cloud instance)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (website)/
│   │   ├── page.tsx (Home)
│   │   ├── products/page.tsx
│   │   ├── cart/page.tsx
│   │   └── about/page.tsx
│   ├── api/
│   │   ├── products/route.ts
│   │   └── users/
│   │       ├── login/route.ts
│   │       ├── register/route.ts
│   │       └── logout/route.ts
│   ├── layout.tsx
│   ├── providers.tsx
│   └── globals.css
├── components/
│   ├── Card.tsx
│   ├── CartItems.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── shard/
│       └── Modal.tsx
├── Context/
│   ├── CartContext.tsx
│   ├── ConnectionContext.tsx
│   └── TanStackQueryProvider.tsx
├── Hook/
│   ├── useCard.tsx
│   ├── useCartItems.tsx
│   ├── useLogin.tsx
│   ├── useLogout.ts
│   ├── useProduct.tsx
│   └── useRegister.tsx
├── interfaces/
│   └── index.ts
├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── lib/
│   ├── cors.ts
│   └── dbConnect.ts
├── models/
│   ├── Products.ts
│   └── Users.ts
├── services/
│   └── api.ts
└── data/
    └── index.ts
```

## API Endpoints

### Products
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `GET /api/products/[id]` - Fetch a specific product
- `PUT /api/products/[id]` - Update a product
- `DELETE /api/products/[id]` - Delete a product

### Users
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `POST /api/users/logout` - User logout

## Database Models

### Product
```typescript
{
  title: string;
  description: string;
  category: string;
  image: string;
  stock: number;
  price: number;
  discount?: number;
}
```

### User
```typescript
{
  email: string;
  password: string; // hashed
  // other user fields...
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Render
- AWS, GCP, Azure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components inspired by modern design systems
- Database integration with MongoDB Atlas
