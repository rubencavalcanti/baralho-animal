import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [ativo, setAtivo] = React.useState(null);

  return (
    <GlobalContext.Provider value={{ ativo, setAtivo }}>
      {children}
    </GlobalContext.Provider>
  );
};