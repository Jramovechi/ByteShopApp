import React, { createContext, useState } from 'react';

// 1 - CREAR EL CONTEXTO
export const cartContext = createContext();


// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	//Funcion Agregar Carrito
	const addCart = (data) => {

		const index = cartList.findIndex(i => i.id === data.id) // posición -1   
			if (index > -1) {
				cartList.splice(index, 1);
				setCartList( [...cartList, {...data, cantidad: data.counter } ] );
			}
			else {
				setCartList( [...cartList, {...data, stock: data.stock} ] );
			}
    }

	//Funcion Borrar Producto
    const deleteItem = (id) => {
        setCartList(cartList.filter((data) => data.id !== id))
    }

	//Funcion Cantidad de Carrito
	const totalCart = (value) => {
		return cartList.reduce( (acum, value) => acum = acum + value.stock , 0 )
	}

	//Funcion Limpiar Carrito
    const clearCart = () => {
        setCartList([])
    }


	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (

		<cartContext.Provider value={ { cartList , setCartList, addCart , deleteItem, totalCart, clearCart } }>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{ children }
		</cartContext.Provider>
	);
};
