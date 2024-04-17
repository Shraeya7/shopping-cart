import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer"; // Import Footer component

import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();
 
    checkout();
    setSuccessMessage("Order successful");
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />; // Added key prop
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <form onSubmit={handleSubmit}>
            <button type="submit">Checkout</button>
          </form>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}

      <Footer /> 

    
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export  {Cart};
