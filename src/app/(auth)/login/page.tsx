"use client";

import Button from "@/src/components/ui/Button";
import useLogin from "@/src/Hook/useLogin";
import { Input } from "@headlessui/react";
import Link from "next/link";

const Login = () => {
  const { register, handleSubmit, submit, loading } = useLogin();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          className="w-full max-w-lg mx-auto p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-4"
          onSubmit={handleSubmit(submit)}
        >
          <h2 className="text-2xl font-bold text-center">Login Your Account</h2>
          {/* Title */}
          <Input
            {...register("email")}
            required
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          <Input
            {...register("password")}
            required
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <Link href="/register" className="text-blue-500 hover:text-blue-700">
            Dont have an account? Register
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
