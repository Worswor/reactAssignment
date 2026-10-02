import React from "react";
import { Link } from "react-router-dom";

function OnlineShop() {
  return (
    <div className="home-page">
      <h1>Electronic Shop</h1>

      <p>Welcome to my online shop! :D</p>

      <Link to="/shop">
        <button>Start Shopping</button>
      </Link>
    </div>
  );
}

export default OnlineShop;