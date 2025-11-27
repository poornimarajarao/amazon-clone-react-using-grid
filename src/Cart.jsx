import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";

export default function Cart({ cart, handleRemoveFromCart, increaseQty, decreaseQty }) {
  const navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h3>Cart is empty</h3>
        <button className="btn btn-warning mt-3" onClick={() => navigate("/")}>Add Products</button>
      </div>
    );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Cart</h2>
      <button className="btn btn-warning mb-3" onClick={() => navigate("/")}>Add More Products</button>
      <div className="product-grid">
        {cart.map((item) => (
          <div className="product-card card" key={item.id}>
            <div className="card-header">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="card-body text-center">
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <button className="btn btn-lg" onClick={() => decreaseQty(item.id)}>
                  <i className="bi bi-trash3 fs-4"></i>
                </button>
                <span>{item.qty}</span>
                <button className="btn btn-lg" onClick={() => increaseQty(item.id)}>
                  <i className="bi bi-plus-circle fs-4"></i>
                </button>
              </div>
              <button className="btn btn-danger mt-2" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
