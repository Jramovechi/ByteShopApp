//CSS
import "./Nav.css";

//Import REACT
import React, { useContext } from "react";

//Import LINK - React Router Dom
import { Link } from "react-router-dom";

//Components
import CartWidget from "../CartWidget/CartWidget";

//CONTEXT
import { cartContext } from "../../Context/cartContext";

const NavBar = () => {
  const { cantidadItem } = useContext(cartContext);

  return (
    <nav className=" container Navigation">
      <ul className="List-ul">
        <Link to="/" className="Link">
          Shop
        </Link>
        <Link to="/About" className="Link">
          About
        </Link>
        <Link
          to="/Cart"
          className="Link d-flex flex-row justify-content-between"
        >
          <CartWidget />
          <div className="mr-2 text-lg">
            {cantidadItem() !== 0 && cantidadItem()}
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
