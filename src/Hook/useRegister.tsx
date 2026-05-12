import { SubmitHandler, useForm } from "react-hook-form";
import { IUserFormInput } from "../interfaces";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { api } from "../services/api";

const useRegister = () => {
  // router
  const router = useRouter();

  // react hook form
  const { register, handleSubmit, reset } = useForm<IUserFormInput>();

  // post data tanstack query
  const mutation = useMutation({
    mutationFn: async (data: IUserFormInput) => {
      return await api.post("/api/users/register", data);
    },
    onSuccess: (data) => {
      // reset form
      reset();

      // show success toast
      toast.success(
        "Account created successfully! Please login to your account.",
      );

      // route to login page
      router.push("/login");

      return data;
    },
    onError: (error: AxiosError<{ error: string }>) => {
      toast.error(error?.response?.data?.error || "Failed to register");
    },
  });

  const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
    // send data to server
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    loading: mutation.isPending,
    error: mutation.error,
  };
};

export default useRegister;
