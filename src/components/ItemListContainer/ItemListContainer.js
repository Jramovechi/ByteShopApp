//Import CSS
import "./ItemListContainer.css";

//Import React Destructuring
import React, { useState, useEffect } from "react";

//Import FireBase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

//BOOTSTRAP
import { Col, Row } from "react-bootstrap";

//Componentes
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import CategoryNav from "../CategoryNav/CategoryNav";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };

    getProducts();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="container">
          <CategoryNav />
          <Row>
            {items.map((item) => (
              <Col
                xs={12}
                md={3}
                className="d-flex justify-content-center"
                key={item.id}
              >
                <Link to={`/detail/${item.id}`} className="LinkCard">
                  <Item data={item} key={item.id} />
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </>
  );
};

export default ItemListContainer;
