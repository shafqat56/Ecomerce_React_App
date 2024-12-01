import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { AllProducts } = useContext(ShopContext);
  const { Productid } = useParams(); // Captures the productId from the URL
  const product = AllProducts.find((e) => e.id === Number(Productid));

  return (
    <div>
      {product ? <BreadCrum product={product} /> : <p>Product not found</p>}
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
