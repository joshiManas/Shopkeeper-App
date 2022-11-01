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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
