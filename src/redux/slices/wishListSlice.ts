import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../types/types";
import { RootState } from "../store";
type WishListSlice = {
  items: Article[];
};
const initialState: WishListSlice = {
  items: [],
};
export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    setWishList: (state, action: PayloadAction<Article[]>) => {
      state.items = action.payload;
    },
    removeArticle: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const wishListSliceSelector = (state: RootState) => state.wishList;
export default wishListSlice.reducer;
