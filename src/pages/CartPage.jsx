import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  function handleConfirmPurchase() {
    dispatch(clearCart());
    setPurchaseConfirmed(true);
  }

  if (purchaseConfirmed) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Purchase Confirmed</h1>
        
        <p>Thank you for your purchase!</p>

        <button onClick={() => setPurchaseConfirmed(false)}>
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {/* Render the cart items or a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : ( // or Render the list of cart items and the Clear Cart button
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name}{" "}
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartPage;