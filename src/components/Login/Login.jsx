import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import LoginCreate from "./LoginCreate";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginLostPassword />} />
        <Route path="/resetar" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
