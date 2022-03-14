//Import CSS
import "./Cart.css";

//Import React Destructuring
import React, { useContext } from "react";

//Import LINK - React Router Dom
import { Link } from "react-router-dom";

//Import Context
import { cartContext } from "../../Context/cartContext";

//BOOTSTRAP
import { Card, Row, Col, Button } from "react-bootstrap";

//Import FONT AWESOME ICONS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ id, image, title, description, price, cantidad }) => {
  const { deleteItem } = useContext(cartContext);

  return (
    <Card key={id} style={{ width: "800px" }} className="mt-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={5}>
          <Link to={`/detail/${id}`} title={title}>
            <Card.Img
              variant="top"
              src={image}
              style={{ height: "9rem", objectFit: "contain" }}
            />
          </Link>
        </Col>

        <Col xs={7}>
          <Card.Body className="d-flex flex-column justify-content-between align-items-start">
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/detail/${id}`}
              title="Ver producto"
            >
              <Card.Title className="fs-2 fw-bold cardTitle">
                {title}
              </Card.Title>
            </Link>
            <Card.Text className="textDescription">{description}</Card.Text>
            <Card.Text className="fs-4 fw-bold textDescription">
              ${price} x {cantidad} = $ {price * cantidad}
            </Card.Text>

            <Button
              key={id}
              onClick={() => deleteItem(id)}
              className="btn btnCard"
            >
              Eliminar del carrito
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Cart;
