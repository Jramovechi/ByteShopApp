//Import CSS
import "./ItemDetailContainer.css";

//Import React Destructuring
import React, { useEffect, useState } from "react";

//Import FireBase
import {
  collection,
  query,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//Import React Router + metodo useParams
import { useParams } from "react-router";

//Componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let id = useParams();
  let productID = id.id;

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", productID)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    getProducts();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productID]);

  return (
    <div className="ItemDetailContainer">
      {isLoading ? (
        <Spinner />
      ) : (
        item.map((item) => {
          return (
            <div key={item.id}>
              <ItemDetail data={item} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemDetailContainer;
