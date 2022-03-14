//Import CSS
import "./CheckOut.css";

//Import React Destructuring
import React, { useState, useContext } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//Import CONTEXT
import { cartContext } from "../../Context/cartContext";

//Components
import MessageSuccess from "../MessageSuccess/MessageSuccess";

//Components REACT-BOOSTRAP
import { Form, Button } from "react-bootstrap";
import { DialogContent } from "@mui/material";

const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const CheckOut = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el ID de la COMPRA
  const [purchaseID, setPurchaseID] = useState("");

  const { clearCart } = useContext(cartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <Form className="FormContainer border" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-5 fw-bold textForm">Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nombre"
            style={{ margin: 10, width: 400 }}
            value={values.name}
            name="name"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-5 fw-bold textForm">Apellido</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Apellido"
            style={{ margin: 10, width: 400 }}
            value={values.lastName}
            name="lastName"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-5 fw-bold textForm">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            style={{ margin: 10, width: 400 }}
            value={values.email}
            name="email"
            onChange={handleOnChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btnASendAction"
          onClick={clearCart}
        >
          Submit
        </Button>
      </Form>
      <div className="container">
        <DialogContent>
          {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
        </DialogContent>
      </div>
    </div>
  );
};

export default CheckOut;
