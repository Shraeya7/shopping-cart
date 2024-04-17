import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Coupons } from "./pages/coupons/Coupons";
import { Trends } from "./pages/trends/Trends"; 
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/trends" element={<Trends />} /> 
           
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
