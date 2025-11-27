import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((p) => p.id === product.id);
      if (exists) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    );
  };

  return (
    <>
      <Navbar search={search} handleSearch={(e) => setSearch(e.target.value)} cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<Product search={search} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>}/>
      </Routes>
    </>
  );
}
export default App;
