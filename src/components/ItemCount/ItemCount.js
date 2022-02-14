import React, {useState} from "react";
import "./ItemCounter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';


const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial);
    const stock = props.stock;


    const handlerCounterUp = () => {    
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            alert ("Sin Stock");
        };


    };

    const handlerCounterDown = () => {
        if (counter > 1) {
            setCounter(counter - 1); 
        };
    };

    const agregarCarrito = () => {
        alert("Agregaste al Carrito")

    };

    return(
        <div className="CounterSection">

            <p>{counter}</p>

            <div className="btn-section">
                <button onClick={handlerCounterUp}><FontAwesomeIcon icon={faPlusCircle} /></button>
                <button onClick={handlerCounterDown}><FontAwesomeIcon icon={faMinusCircle} /></button>
            </div>

            <button onClick={agregarCarrito}>Agregar al Carrito</button>

        </div>
    );
};

export default ItemCount; 