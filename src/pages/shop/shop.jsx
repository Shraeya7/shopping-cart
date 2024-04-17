import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import Footer from "../../components/Footer";
import "./shop.css"; 

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Gadgets Gallery</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} /> 
        ))}
      </div>

      <Footer /> 
    </div>
  );
};
