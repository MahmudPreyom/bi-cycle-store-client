import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: localStorage.getItem("authToken") || null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: TUser | null; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("authToken", action.payload.token); 
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken"); 
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;

// import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../store";

// export type TUser = {
//   userId: string;
//   role: string;
//   iat: number;
//   exp: number;
// };

// type TAuthState = {
//   user: null | TUser;
//   token: null | string;
// };

// const initialState: TAuthState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setUser, logout } = authSlice.actions;

// export default authSlice.reducer;

// export const useCurrentToken = (state: RootState) => state.auth.token;
// export const selectCurrentUser = (state: RootState) => state.auth.user;
