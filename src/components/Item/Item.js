//Import CSS
import "./Item.css";

//Import React
import * as React from "react";

//Components REACT-BOOSTRAP
import { Card, Button } from "react-bootstrap";

const Item = ({ data }) => {
  return (
    <Card style={{ width: "15rem" }} className="my-3 item__cart">
      <Card.Img
        variant="top"
        src={data.image}
        style={{ height: "9rem", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Card.Title className="text-center fs-4 fw-bold titleCard">
          {data.title}
        </Card.Title>
        <Card.Text className="text-center categoryCard">
          (Quedan {data.stock} disponibles)
        </Card.Text>

        <Button className="d-flex btnCard">$ {data.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
