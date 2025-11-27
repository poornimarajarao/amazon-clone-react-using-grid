import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ search, handleSearch, cartCount = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 p-3">
      <NavLink className="navbar-brand" to="/">
        Amazon
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <form className="d-flex mx-auto my-2 my-lg-0" style={{ width: "50%" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Amazon.in"
            aria-label="Search"
            value={search}
            onChange={handleSearch}
          />
        </form>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item d-flex align-items-center">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item d-flex align-items-center">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item d-flex align-items-center">
            <NavLink className="nav-link position-relative cart-link" to="/cart">
              <i className="bi bi-cart-fill fs-4"></i>
              <span className="cart-count-badge">{cartCount}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
