//Import CSS
import "./Footer.css";

//Import REACT
import React from "react";

//Import LINK
import { Link } from "react-router-dom";

//ICONS
import ig from "./instagram.svg";
import fb from "./facebook.svg";
import tw from "./twitter.svg";

const Footer = () => {
  return (
    <div className=" container d-flex bg-black mt-4">
      <div className="d-flex flex-column justify-content-center align-items-center w-25">
        <h2 className="titleFooter">ByteShop</h2>
        <p className="textFooter">
          Somos una empresa de Hardware en Argentina con 15 años de trayectoria.
          Nos dedicamos a la venta y distribución por mayor y por menor de
          componentes de PC de alta calidad y reconocidas marcas.
        </p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center w-25 mb-3">
        <h2 className="titleFooter">Contacto</h2>

        <p className="textFooter">Jonathan Ramovechi © 2021</p>

        <p className="textFooter">JonathanLain.R@HotMail.Com</p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center w-25 mb-4">
        <h2 className="titleFooter">Quick Links</h2>
        <Link to="/" className="Link textFooter">
          Shop
        </Link>
        <Link to="/About" className="Link textFooter">
          About
        </Link>
        <Link to="/Cart" className="Link textFooter">
          Cart
        </Link>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center w-25 mt-1 mb-3">
        <h2 className="titleFooter">Redes Sociales</h2>

        <div class="d-flex flex-column">
          <img src={ig} className="icons" alt="Icons"></img>
          <img src={fb} className="icons my-2" alt="Icons"></img>
          <img src={tw} className="icons" alt="Icons"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
