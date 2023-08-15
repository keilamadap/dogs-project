import React, { useState } from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
          setLogin(true);
        } catch (error) {
          console.log(error);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Usuário inválido");
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      getUser(token);
      navigate("/conta");
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setLogin(false);
    setError(null);
    setLoading(false);
    setData(null);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, loading, login, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
