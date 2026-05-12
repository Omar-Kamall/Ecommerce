"use client";

import { Button } from "@headlessui/react";
import { useEffect } from "react";

const Error = ({ error, reset }: { error?: Error; reset?: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border border-gray-200">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>

        <h1 className="text-2xl font-bold text-gray-800">
          Something went wrong
        </h1>

        <p className="text-gray-500 mt-2 text-sm">{error?.message}</p>

        <Button
          onClick={reset}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Error;
