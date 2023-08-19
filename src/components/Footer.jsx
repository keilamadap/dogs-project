import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { login } = useContext(UserContext);

  if (!login) return;

  return <div className={styles.footer}>Footer</div>;
};

export default Footer;
