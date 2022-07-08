//importaciones
import React from "react";

//componentes
import GitHub from "../components/Github";
import LinkeIn from "../components/LinkeIn";

//estilos css
import "../styles/Footer.css";

const Footer = () => {
  //variables
  const anioActual = new Date().getFullYear();

  return (
    <div className="footer">
      &copy; {anioActual} Axe10rellana
      <p className="footer__p">Redes Sociales</p>
      <div className="footer__socialMediaContainer">
        <a
          href="https://github.com/Axe10rellana"
          target="_blank"
          rel="noreferrer"
          className="footer__socialMediaContainer__left"
        >
          <GitHub fill="#fff" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/axel-orellana/"
          target="_blank"
          rel="noreferrer"
          className="footer__socialMediaContainer__right"
        >
          <LinkeIn fill="#fff" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
