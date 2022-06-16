import React, { useEffect, useState } from "react";
import { axios } from "axios";

const Home = () => {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    let fetchProducts = async () => {
      try {
        let { products } = await fetch("https://dummyjson.com/products").then(
          res => res.json()
        );
        setProduct(products);
      } catch (error) {
        console.log(error);
      }
      console.log(product);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {product.map(prod => {
        let { title } = prod;
        return <div>{title}</div>;
      })}
    </div>
  );
};

export default Home;
