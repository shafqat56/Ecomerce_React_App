import React from "react";
import CartItems from "../Components/CartItems/CartItems";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
const Cart = () => {
  const { all_products, cartitems, removefromcart } = useContext(ShopContext);
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default Cart;
