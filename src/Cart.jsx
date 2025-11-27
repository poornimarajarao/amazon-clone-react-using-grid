import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, handleRemoveFromCart, increaseQty, decreaseQty }) {
  const navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className="text-center mt-5">
        <h3>Cart is empty</h3>
        <button className="btn btn-warning mt-3" onClick={() => navigate("/")}>
          Add Products
        </button>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      <button className="btn btn-warning mb-3" onClick={() => navigate("/")}>
        Add More Products
      </button>

      <div className="row">
        {cart.map((item) => (
          <div className="col-4 my-2" key={item.id}>
            <div className="card">
              <div className="card-header">
                <img src={item.thumbnail} alt={item.title} className="img-fluid" />
              </div>

              <div className="card-body text-center">
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>

                <div className="d-flex justify-content-center align-items-center my-3">
                  <button
                    className="btn btn-lg"
                    onClick={() => decreaseQty(item.id)}
                  >
                    <i class="bi bi-trash3"></i>
                  </button>

                  <span className="mx-3 fs-5">{item.qty}</span>

                  <button
                    className="btn btn-lg"
                    onClick={() => increaseQty(item.id)}
                  >
                    <i class="bi bi-plus-circle"></i>

                  </button>
                </div>

                <button
                  className="btn btn-danger d-block mx-auto mt-2"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>


              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
