import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  // Save the cart state to localStorage
  localStorage.setItem("cart", JSON.stringify(state.cart));

  return result;
};

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [...getDefaultMiddleware(), localStorageMiddleware],
});
