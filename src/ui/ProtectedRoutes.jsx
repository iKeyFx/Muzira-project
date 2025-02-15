import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import SplashScreen from "./SplashScreen";
import { useUser } from "../features/auth/useUser";

function ProtectedRoute({ children }) {
  const { user, isPending } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // localStorage.removeItem("userId");
    // localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    queryClient.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!isPending) {
      if (!user) {
        handleLogout();
        // console.log("No user");
      } else {
        setIsAuthenticated(true);
      }
    }

    const onStorageChange = (event) => {
      if (event.key === "user" && !event.newValue) {
        handleLogout();
      }
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, [isPending, user, queryClient, navigate]);

  if (isPending || !isAuthenticated) {
    return <SplashScreen />;
  }
  return children;
}

export default ProtectedRoute;
