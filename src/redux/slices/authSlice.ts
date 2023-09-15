import { createSlice } from "@reduxjs/toolkit";
import { Role } from "../../types/types";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
type AuthSlice = {
  isAuthenticated: boolean;
  role: Role | null;
  email: string;
  jwt: string;
};
const initialState: AuthSlice = {
  isAuthenticated: false,
  role: null,
  email: "",
  jwt: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = "";
      state.isAuthenticated = false;
      state.role = null;
    },
    updateStatus: (state, action: PayloadAction<AuthSlice>) => {
      state = action.payload;
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
  },
});

export const authSelect = (state: RootState) => state.auth;
export const { logout, updateAccessToken, updateStatus } = authSlice.actions;
export default authSlice.reducer;
