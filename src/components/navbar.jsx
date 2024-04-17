import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div className="left-links">
          <Link to="/browsing-history">Browsing History</Link>
          <Link to="/trends">Trends</Link>

         
          <Link to="/coupons">Coupons</Link>
        </div>
        <div className="right-links">
          <Link to="/">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
