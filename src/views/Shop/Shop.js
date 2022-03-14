//CSS
import "./Shop.css";

//Import REACT
import React from "react";

//Components
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Shop = () => {
  return (
    <div className="Shop">
      <ItemListContainer />
    </div>
  );
};

export default Shop;
