"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    toast.error(error?.message || "Faild Fetch Data !");
  }, [error]);
};

export default Error;
