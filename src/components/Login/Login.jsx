import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useContext } from "react";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import LoginCreate from "./LoginCreate";
import { UserContext } from "../../context/UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginLostPassword />} />
          <Route path="/resetar" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
