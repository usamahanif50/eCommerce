import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../store/ProdcutSlice";
import cartReduceer from "../store/CartSlice";
import wishlistReducers from "../store/wishlistSlice";
const store = configureStore({
  reducer: {
    cart: cartReduceer,
    wishlist: wishlistReducers,
    product: productReducer,
  },
});
export default store;
