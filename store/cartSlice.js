import { createSlice } from "@reduxjs/toolkit";

const loadCartState = () => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("cart");
    return storedState ? JSON.parse(storedState) : { cartItems: [] };
  } else {
    return { cartItems: [] }; // Fallback for environments where localStorage is not available
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState(),
  reducers: {
    addToCart: (state, action) => {
      const { product, selectSize } = action.payload;
      const item = state.cartItems.find(
        (item) => item.product._id === product._id
      );

      if (item) {
        item.quantity++; // Increment the quantity
        item.itemPrice = item.product.price * item.quantity; // Update the itemPrice
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product._id === action.payload.id) {
          if (action.payload.key === "quantity") {
            item.quantity = parseInt(action.payload.val);
            item.itemPrice = item.product.price * item.quantity;
          } else {
            item[action.payload.key] = action.payload.val;
          }
        }
        return item;
      });
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.product._id !== action.payload.id;
      });
    },

    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, updateCart, removeFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
