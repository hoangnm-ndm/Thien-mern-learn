import React from "react";
import ClientHeader from "./components/layouts/client/ClientHeader";
import ClientFooter from "./components/layouts/client/ClientFooter";
import Button from "./components/common/Button";
import ProductItem from "./features/product/ProductItem";
import ProductList from "./features/product/ProductList";

const App = () => {
  return (
    <div>
      <ClientHeader />
      <main>
        <h1>Xin chao</h1>
        <Button color="red" size="medium">
          Register
        </Button>
        <Button color="blue" size="big">
          Login
        </Button>
        <Button size="small">Cancel</Button>
        <ProductList />
      </main>
      <ClientFooter />
    </div>
  );
};

export default App;
