//Import React Destructuring
import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

//Import FireBase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

//Componentes
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const CategoryType = () => {
  const [item, setItem] = useState([]);

  const category = useParams();
  const productCategory = category.category;

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", productCategory)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    getProducts();
  }, [productCategory]);

  return (
    <div>
      {item.map((item) => {
        return (
          <div>
            <ItemDetail data={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryType;
