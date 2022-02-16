import React, { useState } from "react";
import "./ItemCount.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';


const ItemCount = ( { stock , initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);
    


    const handlerCounterUp = () => {    
        counter < stock && setCounter(counter + 1)
    };

    const handlerCounterDown = () => {
        counter > initial && setCounter(counter - 1)
    };

    return(
        <div className="CounterSection">

            <p>{counter}</p>

            <div className="btn-section">
                <button onClick={handlerCounterUp}><FontAwesomeIcon icon={faPlusCircle} /></button>
                <button onClick={handlerCounterDown}><FontAwesomeIcon icon={faMinusCircle} /></button>
                <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>

        </div>
    );
};

export default ItemCount; 