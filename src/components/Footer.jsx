import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { UserContext } from "../context/UserContext";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

const Footer = () => {
  const { login } = useContext(UserContext);

  if (!login) return;

  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
