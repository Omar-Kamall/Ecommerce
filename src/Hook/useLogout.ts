import { useRouter } from "next/navigation";
import { api } from "../services/api";
import { useState } from "react";

export const useLogout = () => {
  // Get the router instance for navigation
  const router = useRouter();

  // State to manage loading state during logout
  const [loading, setLoading] = useState(false);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Set loading state to true while logging out
      setLoading(true);

      // Call the logout API route to clear the token cookie
      await api.post("/api/users/logout");

      // Redirect to login page after logout
      router.push("/login");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, loading };
};