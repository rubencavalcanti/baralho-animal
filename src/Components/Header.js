import React from "react";
import styles from "./Header.module.css";
import logo from "../Assets/forest.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../UserContext";
const Header = () => {
  const navigate = useNavigate();
  const global = React.useContext(GlobalContext);

  function sair() {
    navigate("/")
  }

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      {global.ativo ? (
        <div>
          <p>Bem vindo, {localStorage.nome}!</p>
          <button className={styles.sair} onClick={sair}>Sair</button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Header;
