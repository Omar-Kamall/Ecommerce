"use client";

import Button from "@/src/components/ui/Button";
import useProduct from "@/src/Hook/useProduct";
import Link from "next/link";
import MyModal from "@/src/components/shard/Modal";
import { Input } from "@headlessui/react";
import useCartItems from "@/src/Hook/useCartItems";

const Home = () => {
  // custom hook producyt
  const { addProductHandler, isOpen, setIsOpen } = useProduct();

  // custom hok cart
  const { register, onSubmit, handleSubmit , loading} = useCartItems(setIsOpen)

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <div className="flex items-center justify-center gap-5">
          <Link
            href="/products"
            className="bg-white p-2 rounded-lg text-black font-bold hover:shadow-lg hover:shadow-gray-400 duration-300"
          >
            View Products
          </Link>

          <Button
            onClick={() => addProductHandler()}
            className="bg-white p-2 rounded-lg text-black font-bold hover:shadow-lg hover:shadow-gray-400 duration-300"
          >
            Add Product
          </Button>
        </div>
      </div>
      <MyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Product"
        titleButton="Add"
        loading={loading}
        actionButtonHandler={() => {
          handleSubmit(onSubmit)();
        }}
      >
        <form className="w-full max-w-lg mx-auto p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-4">
          {/* Title */}
          <Input
            {...register("title")}
            required
            placeholder="Product Title"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Description */}
          <textarea
            required
            {...register("description")}
            placeholder="Product Description"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:border-black outline-none"
          />

          {/* Category */}
          <Input
            required
            {...register("category")}
            placeholder="Category (e.g. electronics)"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Image */}
          <Input
            required
            {...register("image")}
            placeholder="Image URL"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Stock */}
          <Input
            required
            type="number"
            {...register("stock", { valueAsNumber: true })}
            placeholder="Stock"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Price */}
          <Input
            required
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="Price"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Discount */}
          <Input
            type="number"
            {...register("discount", { valueAsNumber: true })}
            placeholder="Discount %"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />
        </form>
      </MyModal>
    </>
  );
};

export default Home;
