import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface RootState {
  application: {
    authToken: string | null;
  };
}

export const requireLogin = (): void => {
  const authToken = useSelector((state: RootState) => state.application.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);
};