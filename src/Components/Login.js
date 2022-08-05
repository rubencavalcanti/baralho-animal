import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import fotoLogo from "../Assets/fotoLogin.png";
import { GlobalContext } from "../UserContext";

const Login = () => {
  const global = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [nome, setNome] = React.useState("");

  function login(event) {
    event.preventDefault();
    if (nome.length > 3) {
      navigate("/mesa");
    } else {
      alert("Insira um nome valido!");
    }
  }

  React.useState(() => {
    global.setAtivo(false);
  }, []);

  localStorage.nome = nome;
  if (Login === null) return <p>Carregando</p>;
  return (
    <>
    <Helmet>
      <title>Baralho Animal | Login</title>
    </Helmet>
      <div className={styles.animeLeft}>
        <div className={styles.container}>
          <div className={styles.imgFloresta}></div>
          <div className={styles.efeitoVidro}>
            <form className={styles.formNome}>
              <img className={styles.fotoLogo} src={fotoLogo} />
              <h1 className={styles.label} htmlFor="nome">
                Bem vindo!
              </h1>
              <p>Descubra aleatoriamente animais pelo mundo!</p>
              <input
                type="text"
                id="nome"
                onChange={(event) => setNome(event.target.value)}
                placeholder="Entre com seu nome"
              />
              <button className={styles.buttonLogin} onClick={login}>
                Ver cartas
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
