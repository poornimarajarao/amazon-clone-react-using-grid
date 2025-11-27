import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loder from "./Loder";
import Error from "./Error";

export default function Product({ search, handleAddToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
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
      {loading && <Loder />}
      {error && <Error msg={error} />}

      {!loading && !error && (
        <section className="container-fluid">
          <div className="row">
            <ProductList
              Products={Products}
              handleAddToCart={handleAddToCart}
              handleSelected={() => {}} 
            />
          </div>
        </section>
      )}
    </>
  );
}
