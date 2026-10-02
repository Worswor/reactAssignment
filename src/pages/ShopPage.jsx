import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Ensure correct import

function ShopPage() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get the items from the cart state in the Redux store
  const items = useSelector((state) => state.cart.items);


  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Online Shop</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {items.length === 0 ? (
          <p>Loading Items...</p>
        ) : (
          items.map(item => (
            <div key={item.id} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
              <img src={item.image} alt={item.name} width="100" />
              <h3>{item.name}</h3>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShopPage;