import React from "react";
import "./Header.css";
import img from "./bits-and-bytes-logo-final.png";

const Header = () => {
  return (
    <div className="container Header">
      <h1>Byte Shop</h1>
      <img src={img} alt="Logo" width="150px" />
    </div>
  );
};

export default Header;
