import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PokemonContextProvider from "./Context/PokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
