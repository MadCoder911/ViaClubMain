import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../src/features/app/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
