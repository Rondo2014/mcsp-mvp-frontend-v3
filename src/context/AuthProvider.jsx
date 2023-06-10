import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios.js";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token) {
      setAuth({ token, username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setAuth({});
    navigate("/");
  };

  const handleLogin = async (username, password) => {
    try {
      console.log("hello");
      console.log(username, password);

      const response = await axios.post(
        "/users/login",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response?.data?.token;

      localStorage.setItem("token", token);

      setAuth({ token, username });
      return true;
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
