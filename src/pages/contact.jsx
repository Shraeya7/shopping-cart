import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import "./contact.css"; 

const Contact = () => {
  const [querySent, setQuerySent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setQuerySent(true);
    
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <div className="content">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>(123) 456-7890</span>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <span style={{ textDecoration: "underline", color: "black" }}>GalleryGadgets@gmail.com</span>

          </div>
          <div className="info-item">
            <AiFillClockCircle />
            <span>Monday - Friday: 9am to 5pm</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <br />
            <br />
            <input type="email" placeholder="Your Email" required />
            <br />
            <br />
            <textarea placeholder="Your Message" required></textarea>
            <br />
            <br />
            <button className="send-button" type="submit">Send</button>
          </form>
        </div>
        {querySent && (
          <div className="query-sent">
            <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
              Query sent. Please wait until your query is resolved. Thank you for your patience.
            </p>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer">
        <p>&copy; 2024 PedroTech. All rights reserved.</p>
      </div>
    </div>
  );
};

export { Contact };
