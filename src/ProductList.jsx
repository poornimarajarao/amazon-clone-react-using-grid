import React from "react";

export default function ProductList({ Products, handleAddToCart }) {
  return (
    <>
      {Products.map((item) => {
        const { id, title, description, price, rating, thumbnail } = item;
        return (
          <div className="product-card card" key={id}>
            <div className="card-header">
              <img src={thumbnail} alt={title} />
            </div>
            <div className="card-body text-center">
              <h4>{title}</h4>
              <p>{description}</p>
              <h4>{price}</h4>
              <p>⭐{rating}</p>
              <button className="btn btn-warning" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
