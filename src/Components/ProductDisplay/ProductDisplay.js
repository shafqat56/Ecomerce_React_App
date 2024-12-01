import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import stardull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtoCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdispaly-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdispaly-img">
          <img className="productdispaly-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdispaly-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-rightstar">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(422)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productydisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productydisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdsipaly-right-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            voluptate illo eveniet cupiditate, dolores iure! Quod consectetur
            excepturi culpa iusto, consequuntur voluptatibus.
          </p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-list">
            <div className="productdisplay-right-size-item">S</div>
            <div className="productdisplay-right-size-item">M</div>
            <div className="productdisplay-right-size-item">L</div>
            <div className="productdisplay-right-size-item">XL</div>
            <div className="productdisplay-right-size-item">XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addtoCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="productdsipaly-right-category">
          <span>Category :</span>Women , T-Shirt , Crop Top{" "}
        </p>
        <p className="productdsipaly-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
