import React from "react";
import './Product.css';

export default function ProductList({ Products, handleAddToCart }) {
  return (
    <>
      {Products.map((item) => {
        const { id, title, description, category, price, rating, thumbnail } = item;
        return (
          <div className="col-3 my-2" key={id}>
            <div className="card">
              <div className="card-header">
                <img src={thumbnail} alt={title} className="img-fluid" />
              </div>
              <div className="card-body product-card-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price}</h4>
                <p>⭐{rating}</p>
                <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
