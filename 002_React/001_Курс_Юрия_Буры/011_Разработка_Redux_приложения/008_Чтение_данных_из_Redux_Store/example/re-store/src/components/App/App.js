import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
