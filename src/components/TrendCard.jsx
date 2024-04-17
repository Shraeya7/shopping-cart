import React from "react";
import { FaStar } from "react-icons/fa"; 
import "../styles/trendCard.css"; 

const TrendCard = ({ userId, name, stars, experience }) => {
  return (
    <div className="trend-card">
      <div className="card-header">
        <h2>{name}</h2>
        <div className="star-rating">
          
          {[...Array(parseInt(stars))].map((star, index) => (
            <FaStar key={index} className="star" />
          ))}
        </div>
      </div>
      <p className="user-id">User ID: {userId}</p>
      <p className="experience">{experience}</p>
    </div>
  );
};

export default TrendCard;
