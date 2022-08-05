import React from "react";
import styles from "./Cartas.module.css";

const Cartas = () => {
  const [cartas, setCartas] = React.useState(null);

  React.useEffect(() => {
    function fetchData() {
      getValues(5);
      console.log(cartas);
    }
    fetchData();
  }, []);

  async function getValues(lengthCards) {
    try {
      const response = await fetch(
        "https://zoo-animal-api.herokuapp.com/animals/rand/" + lengthCards
      );
      const results = await response.json();
      results.map((carta) => {
        carta.pontos = Math.floor(Math.random() * 11);
      });
      if (cartas !== null && cartas.length > 0) {
        setCartas((current) => [...current, ...results]);
      } else {
        setCartas(results);
      }
      
    } catch (e) {
      console.error(e);
    }
  }

  function ramdomSort() {
    var newArray = [];

    while (newArray.length !== cartas.length) {
      var i = Math.floor(Math.random() * cartas.length);

      if (newArray.indexOf(cartas[i]) < 0) {
        newArray.push(cartas[i]);
      }
    }
    setCartas(newArray);
  }

  function addCard() {
    if (cartas.length < 8) {
      getValues(1);
    }
  }

  if (cartas === null) return <p>carregando</p>;
  return (
    <div className={styles.animeLeft}>
      <div className={styles.container}>
        <div className={styles.painel}>
          <h1>Baralho Aninal</h1>
          <button onClick={() => ramdomSort()}>Embaralhar</button>
          <button onClick={() => addCard()}>Puxar +1 carta</button>
        </div>
        <div className={styles.containerCarta}>
          {cartas.map((carta) => (
            <div className={styles.carta} key={carta.id}>
              <img src={carta.image_link} alt={carta.name} loading="lazy" />
              <h1>{carta.name}</h1>
              <p>Nome em latin: {carta.latin_name}</p>
              <p>Hora de atividade: {carta.active_time}</p>
              <p>Habitat: {carta.habitat}</p>
              <p>Pontos: {carta.pontos}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartas;
