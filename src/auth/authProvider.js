import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [, setCookie, removeCookie] = useCookies(["userData"]);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("userData : ", userData);
    setIsLogin(true);
    setUser(userData);
    setCookie("userData", JSON.stringify(userData), {
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/user/logout",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        setIsLogin(false);
        setUser(null);
        removeCookie("userData", { path: "/" });
        navigate("/");
      }
    } catch (error) {
      console.log("logout failed : ", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setUser(res.data.user);
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Session check failed :", error);
        setIsLogin(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, login, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
