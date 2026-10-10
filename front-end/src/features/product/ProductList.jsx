import React from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    title: "iphone X",
    price: 2000,
  },
  {
    id: 2,
    title: "samsung galaxy",
    price: 2002,
  },
];

const ProductList = () => {
  return (
    <>
      {products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </>
  );
};

export default ProductList;
