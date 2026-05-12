"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IUserFormInput } from "../interfaces";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { api } from "../services/api";

const useLogin = () => {
  // router
  const router = useRouter();

  // form state
  const { register, handleSubmit, reset } = useForm<IUserFormInput>();

  // post data tanstack query
  const mutation = useMutation({
    mutationFn: async (data: IUserFormInput) => {
      const res = await api.post("/api/users/login", data);
      return res.data;
    },

    onSuccess: (data) => {
      // reset form
      reset();

      // show success toast with user name
      const userName = String(data.user.name[0]).toUpperCase();
      toast.success(`Welcome back, ${userName + data.user.name.slice(1)}!`);

      // redirect to home page
      router.push("/");

      return data;
    },

    onError: (error: AxiosError<{ error: string }>) => {
      toast.error(error?.response?.data?.error || "Failed to login");
    },
  });

  const submit: SubmitHandler<IUserFormInput> = (data) => {
    // send data to server
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    submit,
    error: mutation.error,
    loading: mutation.isPending,
  };
};

export default useLogin;
