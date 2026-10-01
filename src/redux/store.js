import { configureStore } from "@reduxjs/toolkit";
import profitReducer from "./profitSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    profit: profitReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;