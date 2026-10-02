import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  function handleConfirmPurchase() {
    dispatch(clearCart());
    setPurchaseConfirmed(true);
  }

  if (purchaseConfirmed) {
    return (
      <div className="page cart-page">
        <h1>Purchase Confirmed</h1>
        
        <p>Thank you for your purchase!</p>

        <button onClick={() => setPurchaseConfirmed(false)}>
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <h1>Shopping Cart</h1>
      
      {/* Render the cart items or a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : ( // or Render the list of cart items and the Clear Cart button
        <>
          <p> You have {totalItems} item {totalItems !== 1 ? "s" : ""} in your cart. </p>
          <div className="cart-items"> {cartItems.map((item) => ( 
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              {/* Display the item name, price, and quantity controls */}
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p> ${item.price.toFixed(2)} each </p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(removeFromCart(item.id)) } > - </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item)) } > + </button>
                </div>
              </div>
              {/* Display the total price for this item and a Remove button */}
              <div className="cart-item-right">
                <strong> ${(item.price * item.quantity).toFixed(2)} </strong>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id)) } >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Display the total price and buttons for clearing the cart and confirming the order */}
        <div className="cart-summary"> 
          <h2> Total: ${totalPrice.toFixed(2)} </h2>
          <div className="cart-buttons">
            <button className="clear-button" onClick={() => dispatch(clearCart())} >
              Empty Cart
            </button>
            <button className="confirm-button" onClick={handleConfirmPurchase} >
              Confirm Order
              </button>
            </div>
         </div>
        </>
      )}
    </div>
  );
}

export default CartPage;