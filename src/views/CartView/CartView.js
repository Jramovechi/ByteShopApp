//CSS
import "./CartView.css";

//Import React Destructuring
import React, { useContext } from "react";

//Import LINK - React Router Dom
import { Link } from "react-router-dom";

//Import Context
import { cartContext } from "../../Context/cartContext";

//Component REACT-BOOTSTRAP
import { Card } from "react-bootstrap";

//Components
import Cart from "../../components/Cart/Cart";
import NotFound from "../../components/Not Found/NotFound";

//IMG Medios de Pagos
import img from "./pagos-1.jpg";

const CartView = () => {
  const { cartList, totalCart, clearCart } = useContext(cartContext);

  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      {cartList.length > 0 ? (
        cartList.map((prod) => (
          <Cart
            key={prod.id}
            id={prod.id}
            image={prod.image}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            category={prod.category}
            cantidad={prod.cantidad}
          />
        ))
      ) : (
        <section className="d-flex flex-column justify-content-center align-items-center mt-3">
          <NotFound />
          <Link to="/" className="btn btn-outline-primary btnHome mt-2 mb-5">
            Volver al Home
          </Link>
        </section>
      )}

      {cartList.length > 0 && (
        <p className="my-3 fs-3 fw-bold total">Total:$ {totalCart()}</p>
      )}

      {cartList.length > 0 && (
        <section className="mb-3">
          <Link to="/checkout" className="btn btn-success btnCard me-2">
            Comprar
          </Link>
          <button
            onClick={clearCart}
            className="btn btn-outline-danger btnCard ms-2"
          >
            Vaciar carrito
          </button>
          <div className="d-flex flex-column">
            <Card.Img
              className="mt-3 imgPagos"
              style={{ width: "50", height: "100" }}
              src={img}
              alt="pagos"
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default CartView;
