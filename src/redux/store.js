import todoReducer from "./slice/todo";
import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
