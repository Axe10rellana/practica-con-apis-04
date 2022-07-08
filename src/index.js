//importaciones
import React from "react";
import ReactDOM from "react-dom/client";

//estilos css generales
import "./styles/index.css";

//componente principal
import App from "./App";

//react-router
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
