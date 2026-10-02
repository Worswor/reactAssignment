import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Ensure correct import
import products from "../redux/products";

function ShopPage() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1>Electronic Shop</h1>
      {/* Render the product grid */}
      <div className="product-grid">
        {/* Map through the products array and render each product */}
        {products.map((product) => (
          // Each product card has a unique key based on the product's id
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;