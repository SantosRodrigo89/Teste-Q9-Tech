import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../Routes/coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      goToRegister(navigate);
    }
  }, []);
};
