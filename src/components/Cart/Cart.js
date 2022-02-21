import React, {  useContext  } from 'react';
import "./Cart.css";

import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import NotFound from '../Not Found/NotFound';


const Cart = () => {

    const { cartList, deleteItem, clearCart,  totalCart } = useContext(cartContext);

    return (
        <div>
            { !cartList.length > 0 ?
                <>
                    <NotFound/>
                </>    
                :
                <div className='contenedorCartItem'>
                    <h3>Carrito</h3>
                    
                    {cartList.map(prod => 
                    <Link to={`/detail/${prod.id}`}>
                        <div key={prod.id}  className="cartItem">
                            <img src={prod.image} alt="" width={80}/>
                            <div>
                                <h4>{prod.title}</h4>
                                <div >
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio unitario: {prod.price}$</p>
                                    <p>Subtotal: {prod.price * prod.cantidad}$</p>
                                </div>
                            </div>
                            <button key={prod.id} onClick={()=> deleteItem(prod.id)} className='deleteTrash'>
                                <FontAwesomeIcon icon= { faTrashCan } />
                            </button>
                        </div>
                    </Link>
                    
                    )}
                        
                    <h4>Total: {totalCart()}$</h4>
                    <div>
                        <button onClick={ clearCart }>Limpiar Carrito</button>
                    </div>

                </div>
            }
        </div>
    )
}

export default Cart;