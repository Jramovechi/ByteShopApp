//Import CSS
import "./CategoryType.css";

//Import React Destructuring
import React, { useState, useEffect } from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

//Import FireBase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

//Componentes
import Item from "../../components/Item/Item";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

const CategoryType = () => {
  const [items, setItems] = useState([]);

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
      setItems(docs);
    };
    getProducts();
  }, [productCategory]);

  return (
    <div className="container CategoryView">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`} className="LinkCard">
              <Item data={item} key={item.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryType;
