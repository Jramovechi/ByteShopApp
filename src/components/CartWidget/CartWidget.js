import React, { useContext } from "react";

import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import { cartContext } from "../../Context/cartContext";

const CartWidget = () => {
  const { cantidadItem } = useContext(cartContext);

  return (
    <div className="Cart">
      <FontAwesomeIcon icon={faCartArrowDown} />
      <div className="Cart-Count">{cantidadItem() !== 0 && cantidadItem()}</div>
    </div>
  );
};

export default CartWidget;
