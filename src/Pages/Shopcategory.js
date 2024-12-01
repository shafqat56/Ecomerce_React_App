import React, { useContext } from "react";
import "./CSS/Shopcategory.css";
import dropdown_iocn from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { AllProducts } = useContext(ShopContext);

  return (
    <div className="shopcategory">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="banner-add"
      />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <img src={dropdown_iocn} alt="dropdown-iocn" />
        </div>
      </div>
      <div className="shopcategory-products">
        {AllProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
