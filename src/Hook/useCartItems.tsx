import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";

const useCartItems = (setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  // loading state
  const [loading, setLoadind] = useState(false);

  // init react hook form
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // update loading
      setLoadind(true);

      await api.post("/products", {
        ...data,
        price: data.price || 0,
        discount: data.discount || 0,
        stock: data.stock || 0,
      });

      // Handle add action
      setIsOpen(false);
    } catch (error) {
      toast.error(error instanceof Error ? error?.message : "Faild updated !");
    } finally {
      setLoadind(false);
    }
  };
  return { register, onSubmit, handleSubmit, loading };
};

export default useCartItems;
