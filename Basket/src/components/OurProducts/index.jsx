import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../Product";

const OurProducts = () => {
  const url = "http://localhost:3000/products";
  const { data, loading } = useFetch(url);
  if (loading) {
    return <p>...loading</p>;
  }


  return (
    <div className="products">
      {data &&
        data.map((product) => (
          <Product
            key={product.id}
            {...product}
          />
        ))}
    </div>
  );
};

export default OurProducts;
