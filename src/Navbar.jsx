import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarGrid.css";

export default function Navbar({ search, handleSearch, cartCount = 0 }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 p-3 navbar-grid">
      <NavLink className="navbar-brand" to="/">
        Amazon
      </NavLink>

      <form className="search-bar">
        <input
          className="form-control"
          type="search"
          placeholder="Search Amazon.in"
          value={search}
          onChange={handleSearch}
        />
      </form>

      <div className="nav-links">
        <NavLink className="nav-link text-white" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link text-white" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link position-relative text-white" to="/cart">
          <i className="bi bi-cart-fill fs-4"></i>
          <span className="cart-count-badge">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}
