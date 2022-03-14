import React, { useState } from "react";
import "./ItemCount.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handlerCounterUp = () => {
    counter < stock
      ? setCounter(counter + 1)
      : alert("Superaste el stock de productos :(");
  };

  const handlerCounterDown = () => {
    if (counter > initial) setCounter(counter - 1);
  };

  return (
    <div className="CounterSection">
      <p className="fs-4 fw-bold">{counter}</p>

      <div className="btn-section">
        <button
          onClick={handlerCounterUp}
          className="btn btn-outline-primary me-2"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          onClick={handlerCounterDown}
          className="btn btn-outline-primary me-2"
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <button
          onClick={() => onAdd(counter)}
          className="btn btn-outline-primary btnAdd me-2"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
