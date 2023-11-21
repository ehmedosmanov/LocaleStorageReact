import React from "react";
import { useState } from "react";
import "./index.scss";
const Product = ({ images, name, price }) => {
  const [item, setItem] = useState([]);
  const handleClick = () => {
    const items = JSON.parse(localStorage.getItem("basketArr")) || [];
    const newItem = { name, price, images };
    const updateItems = [...items, newItem];
    setItem(updateItems);
    localStorage.setItem("basketArr", JSON.stringify(updateItems));
    console.log(item);
  };
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-img">
          <img src={images[0]} alt="" />
        </div>
        <div className="product-title">
          <p>{name}</p>
          <span>${price}</span>
        </div>
        <div className="product-buttons">
          <button onClick={handleClick}>Add To Basket</button>
          <button>Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
