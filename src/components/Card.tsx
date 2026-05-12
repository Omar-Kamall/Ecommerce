"use client";

import Image from "next/image";
import { ICardItem } from "../interfaces";
import Button from "./ui/Button";
import useProduct from "../Hook/useProduct";
import useCard from "../Hook/useCard";
import MyModal from "./shard/Modal";
import Input from "./ui/Input";


const Card = ({
  _id,
  title,
  description,
  category,
  image,
  stock,
  price,
  discount,
  quantity = 1,
}: ICardItem) => {
  // custom hook for card
  const {
    updateProductHandler,
    deleteProductHandler,
    addToCartHandler,
    isOpen,
    setIsOpen,
    product
  } = useProduct();

  // custom hook card
  const {handleSubmit , onSubmit , register ,loading} = useCard(product , setIsOpen);

  return (
    <div className="w-full rounded-2xl shadow-md shadow-gray-300 overflow-hidden bg-transparent border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
          className="object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>

        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          <p className="font-bold text-blue-600">${price.toFixed(2)}</p>

          {discount && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400">Stock: {stock}</p>

        <div className="space-y-3">
          <Button
            onClick={() =>
              addToCartHandler({
                _id,
                title,
                description,
                category,
                image,
                stock,
                price,
                discount,
                quantity,
              })
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 transition"
          >
            Add to Cart
          </Button>

          <div className="flex gap-3">
            <Button
              onClick={() =>
                updateProductHandler({
                  _id,
                  title,
                  description,
                  category,
                  image,
                  stock,
                  price,
                  discount,
                })
              }
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl py-2 transition"
            >
              Update
            </Button>

            <Button
              onClick={() => deleteProductHandler(_id)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl py-2 transition"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <MyModal
        key={product._id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Product Updated"
        titleButton="Update"
        loading={loading}
        actionButtonHandler={() => {
          // Handle update action
          try {
            handleSubmit(onSubmit)();
          } catch (error) {
            console.error("Error submitting form:", error);
          }
        }}
      >
        <form className="w-full max-w-lg mx-auto p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-4">
          {/* Title */}
          <Input
            {...register("title")}
            placeholder="Product Title"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Description */}
          <textarea
            {...register("description")}
            placeholder="Product Description"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:border-black outline-none"
          />

          {/* Category */}
          <Input
            {...register("category")}
            placeholder="Category (e.g. electronics)"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Image */}
          <Input
            {...register("image")}
            placeholder="Image URL"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Stock */}
          <Input
            type="number"
            {...register("stock", { valueAsNumber: true })}
            placeholder="Stock"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          {/* Price */}
          <Input
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
    </div>
  );
};

export default Card;
