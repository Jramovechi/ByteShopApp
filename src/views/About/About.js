//CSS
import "./About.css";

//Import REACT
import React from "react";

//Import LINK - React Router Dom
import { Link } from "react-router-dom";

//BOOTSTRAP
import { Button } from "react-bootstrap";

//Import IMGs
import img from "./byteShop3.jpg";
import imgs from "./pagos.png";

const About = () => {
  return (
    <div className="containerAbout">
      <img className="imgAbout" src={img} alt="Logo" />
      <p className="textAbout mt-5 fw-bold">
        Somos una empresa de servicio que nos dedicamos a comercializar e
        integrar tecnología con el fin de brindar soluciones a diversas
        industrias y organizaciones privadas y públicas en diferentes puntos de
        Argentina. Nuestra ventaja competitiva es brindar valor agregado a
        nuestros clientes a través de un servicio profesional, ya que les
        proveemos productos de primera línea junto con un asesoramiento
        personalizado, con una relación precio–calidad muy conveniente. Desde el
        año 1997 ofrecemos soluciones completas y a medida de las necesidades de
        nuestros clientes.
      </p>

      <img className="imgMediosPagos" src={imgs} alt="Pagos" />

      <Link to={`/`} className="LinkCard">
        <Button className="d-flex btnCard">Ir al Shop</Button>
      </Link>
    </div>
  );
};

export default About;
