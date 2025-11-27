import React from "react";
import "./ProductGrid.css";

export default function Loader() {
  const totalCard = 28;
  const placeholders = Array.from({ length: totalCard });
  return (
    <section className="product-grid">
      {placeholders.map((_, index) => (
        <div className="product-card card" key={index}>
          <div className="card-header" />
          <div className="card-body"></div>
        </div>
      ))}
    </section>
  );
}
