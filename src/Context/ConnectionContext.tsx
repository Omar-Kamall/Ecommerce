"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ConnectionContext = () => {
  //state connection
  const [, setIsOnline] = useState(navigator.onLine);

  // handlers
  const onlineHandler = () => {
    setIsOnline(true);
    toast.success("Connection established successfully!");
  };

  const offlineHandler = () => {
    setIsOnline(false);
    toast.error("Failed to establish connection!");
  };

  useEffect(() => {
    addEventListener("online", onlineHandler);
    addEventListener("offline", offlineHandler);

    return () => {
      removeEventListener("online", onlineHandler);
      removeEventListener("offline", offlineHandler);
    };
  }, []);

  return null;
};

export default ConnectionContext;
