import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div
      className="product"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "10px 10px 8px rgba(0,0,0,0.5)",
        padding: "12px",
      }}
    >
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <button>Mua ngay</button>
    </div>
  );
};

export default ProductItem;
