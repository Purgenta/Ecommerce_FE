import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import wishListSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishList: wishListSlice,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
