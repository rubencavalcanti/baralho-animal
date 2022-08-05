import React from "react";
import { Helmet } from "react-helmet";
import Cartas from "./Cartas";
import { GlobalContext } from "../UserContext";

const Mesa = () => {
  const global = React.useContext(GlobalContext);

  global.setAtivo(true);
  return (
    <>
    <Helmet>
      <title>Baralho Animal | Mesa de Cartas</title>
    </Helmet>
      <Cartas />
    </>
  );
};

export default Mesa;
