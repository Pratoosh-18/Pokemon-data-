import React from "react";
import Home from "./Components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import PokemonInfo from "./Components/PokemonInfo.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemoninfo" element={<PokemonInfo />}>
          <Route path=":pokemonname" element={<PokemonInfo />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
