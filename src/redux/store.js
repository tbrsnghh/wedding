import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import menuReducer from "./menuSlice";
import hallReducer from "./hallSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    hall: hallReducer,
  },
});
