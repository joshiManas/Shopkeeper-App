import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customer/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

export default store;
