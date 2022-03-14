import React, { createContext, useState } from "react";

// 1 - CREAR EL CONTEXTO
export const cartContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //Funcion Agregar Carrito
  const addCart = (data) => {
    const index = cartList.findIndex((i) => i.id === data.id); // posición -1
    if (index > -1) {
      const oldQty = cartList[index].cantidad;
      cartList.splice(index, 1);
      setCartList([...cartList, { ...data, cantidad: data.cantidad + oldQty }]);
    } else {
      setCartList([...cartList, { ...data, cantidad: data.cantidad }]);
    }
  };

  //Funcion Borrar Producto
  const deleteItem = (id) => {
    setCartList(cartList.filter((data) => data.id !== id));
  };

  //Funcion Cantidad de Carrito
  const totalCart = () => {
    return cartList.reduce(
      (acum, valor) => acum + valor.cantidad * valor.price,
      0
    );
  };

  //Funcion Limpiar Carrito
  const clearCart = () => {
    setCartList([]);
  };

  //Funcion Cantidad
  const cantidadItem = () => {
    return cartList.reduce((acum, prod) => (acum = acum + prod.cantidad), 0);
  };

  // 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

  return (
    <cartContext.Provider
      value={{
        cartList,
        setCartList,
        addCart,
        deleteItem,
        totalCart,
        clearCart,
        cantidadItem,
      }}
    >
      {/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
      {children}
    </cartContext.Provider>
  );
};
