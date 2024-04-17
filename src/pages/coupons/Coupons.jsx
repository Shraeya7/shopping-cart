import React from "react";
import "./coupons.css";

const Coupons = () => {
  return (
    <div className="coupons">
      <h1>Coupons</h1>
      <div className="coupon-container">
        <div className="coupon">
          <h2>Smartwatch </h2>
          <p>Get 10% off on Smartwatch X1. Use coupon code: <span>SMARTWATCHX1</span></p>
        </div>
        <div className="coupon">
          <h2>Wireless Earbuds </h2>
          <p>Get 15% off on Wireless Earbuds Y2. Use coupon code: <span>EARBUDSY2</span></p>
        </div>
        <div className="coupon">
          <h2>Bluetooth Speaker </h2>
          <p>Get 20% off on Bluetooth Speaker Z3. Use coupon code:<span>SPEAKERZ3</span> </p>
        </div>
        <div className="coupon">
          <h2>Camera Drone </h2>
          <p>Get 25% off on Camera Drone A4. Use coupon code:<span>DRONEA4</span> </p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 PedroTech. All rights reserved.</p>
      </div>
    </div>
  );
};

export { Coupons };
