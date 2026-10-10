import React, { useEffect, useState } from "react";
import ClientHeader from "./components/layouts/client/ClientHeader";
import ClientFooter from "./components/layouts/client/ClientFooter";
import Button from "./components/common/Button";
import ProductItem from "./features/product/ProductItem";
import ProductList from "./features/product/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${perPage}&skip=${(page - 1) * perPage}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handlePage = (newPage) => {
    // if (newPage) {
    //   // * tao 1 state để lưu số lượng phần tử.
    //   // * từ số lượng phần tử -> pageMax.
    //   // * kiểm tra newPage >= pageMax -> newPage = pageMax
    // }

    setPage(newPage);
  };
  console.log(products);

  return (
    <div>
      <h1>danh sach san pham</h1>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} width={"100px"} />
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
            <button>Mua ngay</button>
          </div>
        ))}
        <button onClick={() => handlePage(page - 1)} disabled={page === 1}>
          Preview
        </button>
        {page}
        <button onClick={() => handlePage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
