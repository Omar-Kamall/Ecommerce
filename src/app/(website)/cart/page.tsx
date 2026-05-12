"use client";

import CartItems from "@/src/components/CartItems";
import { useCart } from "@/src/Context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems } = useCart();

  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty 🛒</h2>

        <p className="text-gray-500 mt-2">
          Add some products to start shopping
        </p>

        <Link
          href="/products"
          className="mt-5 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold my-6 text-green-400">Shopping Cart</h1>
      <CartItems cartItems={cartItems} />
    </>
  );
};

export default Cart;
