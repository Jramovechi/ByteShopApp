//Import CSS
import "./ItemListContainer.css";

//Import React Destructuring
import React, { useState, useEffect } from "react";

//Import FireBase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

//Componentes
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

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
        <div className="ItemListContainer-container">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`} className="LinkCard">
                  <Item data={item} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
