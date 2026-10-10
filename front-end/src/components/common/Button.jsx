import React from "react";

const sizeOptions = {
  big: { padding: "24px 48px", fontSize: "32px" },
  medium: { padding: "18px 32px", fontSize: "24px" },
  small: { padding: "12px 18px", fontSize: "18px" },
};

const Button = ({ children, color, size }) => {
  /**
   * * props = properties
   */
  // ... -> spread
  return (
    <button style={{ backgroundColor: color, ...sizeOptions[size] }}>
      {children}
    </button>
  );
};

export default Button;

// * style cua 1 phan tu html la danh sach cac thuoc tinh CSS
// * trong JSX, style la 1 object,
// background-color -> backgroundColor
