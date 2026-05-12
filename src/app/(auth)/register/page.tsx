"use client";

import useRegister from "@/src/Hook/useRegister";
import { Button, Input } from "@headlessui/react";
import Link from "next/link";

const Register = () => {
  // get register function from useRegister hook
  const { register, handleSubmit, onSubmit, loading } = useRegister();

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <form className="w-full max-w-lg mx-auto p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center">Register Account</h2>
          {/* Title */}
          <Input
            {...register("name")}
            required
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-lg focus:border-black outline-none"
          />

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
            {loading ? "Registering..." : "Register"}
          </Button>

          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
