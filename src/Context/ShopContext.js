import React, { createContext } from "react";
import AllProducts from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
let getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < AllProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartitems, setCartItems] = React.useState(getDefaultCart());

  // console.log(contextValue);
  const addtoCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };
  const removefromCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const getTotalcartAmount = () => {
    let total = 0;
    AllProducts.forEach((e) => {
      total += e.new_price * cartitems[e.id];
    });
    return total;
  };
  const getTotalCartItems = () => {
    let total = 0;
    AllProducts.forEach((e) => {
      total += cartitems[e.id];
    });
    return total;
  };

  const contextValue = {
    AllProducts,
    cartitems,
    addtoCart,
    removefromCart,
    getTotalcartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
