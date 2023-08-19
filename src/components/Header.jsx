import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../context/UserContext";
import Button from "./Forms/Button";

const Header = () => {
  const { data, userLogout, login } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs-Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data?.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login/Criar
          </Link>
        )}
        {login && <Button onClick={userLogout}>sair</Button>}
      </nav>
    </header>
  );
};

export default Header;
