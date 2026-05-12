"use client";

import Image from "next/image";
import { IProduct } from "../interfaces";
import { Button } from "@headlessui/react";
import { useCart } from "../Context/CartContext";

const Cart = ({ cartItems }: { cartItems: IProduct[] }) => {
  // remove from cart
  const { removeFromCart } = useCart();

  // calculate final price after discount
  const finalPrice = (product: IProduct) => {
    return product?.price - (product?.price * (product?.discount || 1)) / 100;
  };

  return (
    <section className="p-4">
      {cartItems.map((product) => (
        <div
          key={product._id}
          className="flex gap-4 border rounded-xl p-4 shadow-sm mb-5"
        >
          {/* Image */}
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover rounded-lg"
            width={150}
            height={300}
            loading="lazy"
          />

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{product.title}</h2>

            <p className="text-sm text-gray-500 mt-1">{product.description}</p>

            <p className="text-sm mt-2">
              Category: <span className="font-medium">{product.category}</span>
            </p>

            <p className="text-sm mt-1">
              Stock: <span className="font-medium">{product.stock}</span>
            </p>

            {/* Price */}
            <div className="mt-3">
              <span className="text-green-600 font-bold text-lg mr-3">
                ${finalPrice(product)}
              </span>

              <span className="text-gray-400 line-through">
                ${product.price}
              </span>

              <span className="ml-3 text-sm text-red-500">
                -{product.discount}%
              </span>
            </div>

            {/* Actions */}
            <div className="mt-4">
              <Button
                onClick={() => removeFromCart(product._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
