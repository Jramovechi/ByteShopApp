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

//Material UI
import TextField from "@mui/material/TextField";

const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const styles = {
  containerCheckOut: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const CheckOut = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
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
    <div style={styles.containerCheckOut}>
      <h1>CheckOut</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          value={values.name}
          name="name"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          value={values.lastName}
          name="lastName"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          value={values.email}
          name="email"
          onChange={handleOnChange}
        />
        <button className="btnASendAction" onClick={clearCart}>
          Send
        </button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default CheckOut;
