import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./App.module.css";
import Login from "./Components/Login";
import Mesa from "./Components/Mesa";
import NaoEncontrada from "./Components/NaoEncontrada";
import Header from "./Components/Header";
import { GlobalStorage } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mesa" element={<Mesa />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
