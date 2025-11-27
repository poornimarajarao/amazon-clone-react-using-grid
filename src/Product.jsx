import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loader from "./Loader";
import Error from "./Error";
import "./ProductGrid.css";

export default function Product({ search, handleAddToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      setAllProducts(data.products);
      setProducts(data.products);
    } catch (err) {
      setError("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const filtered = allProducts.filter((pro) =>
      pro.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered);
  }, [search, allProducts]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error msg={error} />}
      {!loading && !error && (
        <section className="product-grid">
          <ProductList Products={Products} handleAddToCart={handleAddToCart} />
        </section>
      )}
    </>
  );
}
