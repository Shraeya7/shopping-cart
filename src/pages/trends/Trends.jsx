import React from "react";
import TrendCard from "../../components/TrendCard";
import "../../styles/trends.css";

const Trends = () => {
  return (
    <div className="trends-page">
      <h1 style={{ color: "#900020" }}>Trends</h1> 
      <div className="trend-cards">
        <TrendCard
          userId="manas@1442"
          name="Smartwatch X1"
          stars="4.5"
          experience="Great product, highly recommended!"
        />
        <TrendCard
          userId="charan@345"
          name="Wireless Earbuds Y2"
          stars="3.8"
          experience="Decent product, good value for money."
        />
        <TrendCard
          userId="aruna@872"
          name="Bluetooth Speaker Z3"
          stars="5.0"
          experience="Absolutely love it, exceeded my expectations."
        />
        <TrendCard
          userId="subbu@376"
          name="Camera Drone A4"
          stars="4.2"
          experience="Satisfactory, but could be better."
        />
      </div>
      <div className="footer">
        <p>&copy; 2024 PedroTech. All rights reserved.</p>
      </div>
    </div>
  );
};

export  {Trends};
