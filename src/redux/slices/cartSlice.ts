import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type CartSlice = {
  items: CartItem[];
};
const initialState: CartSlice = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const cartSelector = (root: RootState) => root.cart;
export const { setCart } = cartSlice.actions;
