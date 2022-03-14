//Import CSS
import "./ItemDetail.css";

//Import React Destructuring
import React, { useState, useContext } from "react";

//Import CONTEXT
import { cartContext } from "../../Context/cartContext";

//Componentes
import ItemCount from "../ItemCount/ItemCount";

//Component REACT-BOOTSTRAP
import { Card, Col, Row, Button } from "react-bootstrap";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

//IMG Medios de Pagos
import img from "./pagos.png";

const ItemDetail = ({ data }) => {
  const { cartList, addCart } = useContext(cartContext);

  const [comprado, setComprado] = useState(false);

  const onAdd = (cantidad) => {
    setComprado(true);
    addCart({ ...data, cantidad: cantidad });
  };

  console.log(cartList);

  return (
    <Card style={{ width: "90%", margin: "auto" }}>
      <Row>
        <Col xs={12} md={8}>
          <Card.Img
            src={data.image}
            alt={data.title}
            style={{ height: "25rem", objectFit: "contain" }}
          />
        </Col>

        <Col xs={12} md={4} className="d-flex">
          <Card.Body className="cardBody">
            <Card.Title className="fs-2 fw-bold cardTitle">
              {data.title}
            </Card.Title>
            <Card.Text className="textDescription">
              {data.description}
            </Card.Text>
            <Card.Text className="fs-4 fw-bold">
              Precio: $ {data.price}
            </Card.Text>

            <Card.Text className="fs-8">
              (Quedan {data.stock} disponibles)
            </Card.Text>

            {comprado ? (
              <>
                <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                <div className="mt-2">
                  <Link to="/">
                    <Button className="mx-3"> Seguir comprando </Button>
                  </Link>
                  <Link to="/cart">
                    <Button> Ir al Carrito </Button>
                  </Link>
                </div>
              </>
            ) : (
              <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
            )}
            <Card.Img className="mt-2" src={img} alt="pagos" />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
