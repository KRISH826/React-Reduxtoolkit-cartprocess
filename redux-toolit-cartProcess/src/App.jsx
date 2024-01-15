/** @format */

import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./page/product";
import Cart from "./page/cart";
import GitUsers from "./page/gitusers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/gitusers" element={<GitUsers />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
