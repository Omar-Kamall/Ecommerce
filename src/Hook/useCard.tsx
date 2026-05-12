"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput, IProduct } from "../interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { useRouter } from "next/navigation";

const useCard = (
  product: IProduct,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (product?._id) {
      reset({
        title: product.title || "",
        description: product.description || "",
        category: product.category || "",
        image: product.image || "",
        stock: product.stock || 0,
        price: product.price || 0,
        discount: product.discount || 0,
      });
    }
  }, [product, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // loading
      setLoading(true);

      // update product
      await api.put(`/products/${product._id}`, {
        ...data,
        price: data.price || 0,
        discount: data.discount || 0,
        stock: data.stock || 0,
      });

      // close model
      setIsOpen(false);

      // show toast
      toast.success("Product updated successfully!");

      // reload page
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error?.message : "Faild updated !");
    } finally {
      setLoading(false);
    }
  };
  return { onSubmit, register, handleSubmit, loading };
};

export default useCard;
