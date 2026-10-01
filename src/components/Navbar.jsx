import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart?.items ?? []); // Ensure cartItems is always an array

  return (
    <nav style={{ padding: "10px", background: "#009a9d" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/shop" style={{ marginRight: "15px" }}>Shop</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
}

export default Navbar;