import React, { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../context/UserContext";
import styles from "./Login.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const navigate = useNavigate();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  useEffect(() => {
    const fullname = "15165165165165165.556165165165165";
    let firstname = fullname.slice(0, fullname.indexOf("."));
    let lastname = fullname.slice(fullname.indexOf("."));
    console.log("first", Number(firstname));

    console.log("last", lastname);
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.square} />
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <div className={styles.links}>
        <Link className={styles.lostPassword} to="perdeu">
          Perdeu a senha?
        </Link>
        <p to="/login/criar" className={styles.cadastrar}>
          Cadastre-se
        </p>
        <p className={styles.text}>
          Ainda não possui conta? Cadastre-se no site
        </p>
        <Button>
          <Link to="criar">Cadastro</Link>
        </Button>
      </div>
    </section>
  );
};

export default LoginForm;
