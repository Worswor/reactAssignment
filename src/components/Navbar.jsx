import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  // Ensure cartItems is always an array
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate total items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{ padding: "10px", background: "#009a9d" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/shop" style={{ marginRight: "15px" }}>Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;