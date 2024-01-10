/** @format */

import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./page/product";
import Cart from "./page/cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
