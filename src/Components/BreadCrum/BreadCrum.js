import React from "react";
import "./BreadCrum.css";
import arrow_icon from "../Assets/arrow.png";

const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrum;
