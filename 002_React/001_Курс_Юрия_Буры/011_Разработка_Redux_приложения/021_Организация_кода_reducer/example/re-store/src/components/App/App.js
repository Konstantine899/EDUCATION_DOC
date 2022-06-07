import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";
import ShopHeader from "../shopHeader/shopHeader";
import "./App.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default App;
