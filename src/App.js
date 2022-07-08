//importaciones
import React from "react";

//react-router
import { Routes, Route } from "react-router-dom";

//componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

//paginas
import Home from "./pages/Home";
import CharacterId from "./pages/CharacterId";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterId />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
