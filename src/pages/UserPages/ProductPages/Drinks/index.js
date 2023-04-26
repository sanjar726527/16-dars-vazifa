import React from "react";

import { ProductCard } from "../../../../components/User/ProductsCard";
import { useSelector } from "react-redux";

export const Drinks = () => {
  const products = useSelector((product) => product.product.allProducts);
  const product = products.filter((product) => product.type === "drinks");

  return (
    <div className="productCard py-3">
      <h1>Drinks</h1>
      <ProductCard product={product} />
    </div>
  );
};
