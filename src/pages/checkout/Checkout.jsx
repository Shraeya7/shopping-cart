

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer"; 
import "./checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentInfo: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <label>Payment Information</label>
        <input
          type="text"
          name="paymentInfo"
          value={formData.paymentInfo}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
