import React, { createContext, useState, useContext } from 'react';

// 1 - CREAR EL CONTEXTO
export const cartContext = createContext([])

export const useCartContext = () => {
    return useContext(cartContext);
}


// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	//Funcion Agregar Carrito
	const addCart = (data) => {
		setCartList(data);
    }

	//Funcion Borrar Producto
    const deleteItem = (id) => {
        setCartList(cartList.filter((data) => data.id !== id))
    }

	//Funcion Limpiar Carrito
    const clearCart = () => {
        setCartList([])
    }


	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (

		<cartContext.Provider value={[ cartList, setCartList, addCart, deleteItem, clearCart ]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{ children }
		</cartContext.Provider>
	);
};
