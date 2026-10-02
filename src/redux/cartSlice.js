import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Ensure "items" is properly initialized
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //Adds items
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      // Increment quantity if item already exists, otherwise add new item
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    //Removes items
    removeFromCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (!existingItem) return; // If item doesn't exist, do nothing
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          item => item.id !== action.payload.id);
      } else {
        existingItem.quantity -= 1;
      }
    },
    // Clears the cart
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;