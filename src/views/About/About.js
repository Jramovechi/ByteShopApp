import React from "react";
import './About.css';
import img from './byteShop3.jpg';


const About = () => {
	return (
		<div className="containerAbout">
			<img className="imgAbout" src={img} alt='Logo'  />	
			<p className="textAbout">
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
		</div>
	);
};

export default About;
