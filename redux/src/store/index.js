import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice/index";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
});
