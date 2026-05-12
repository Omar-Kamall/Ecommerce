"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IChildren, IProduct } from "../interfaces";
import toast from "react-hot-toast";

interface ICartContext {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: { children: IChildren }) => {
  // state for cart items
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  // useEffects for local storage
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");

    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // functions cart

  // add product to cart
  const addToCart = (product: IProduct) => {
    // check if product exist in cart
    const findProduct = cartItems.find((item) => item._id === product._id);

    if (!findProduct) {
      setCartItems((prev) => [...prev, product]);
      toast.success("Product added successfully!");
      return;
    }

    toast.error("Product Already exist in cart!");
  };

  // remove from cart
  const removeFromCart = (_id: string) => {
    // check if product exist in cart
    const findProduct = cartItems.find((item) => item._id === _id);

    if (findProduct) {
      setCartItems(cartItems.filter((item) => item._id !== _id));
      toast.success("Product removed successfully!");
      return;
    }

    toast.error("Failed to remove product!");
  };

  // clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared successfully!");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used within a CartProvider");

  return context;
};
