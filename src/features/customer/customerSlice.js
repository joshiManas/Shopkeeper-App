import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerList: [
    {
      id: 1,
      name: "manas joshi",
      items: 10,
      amount: 555,
      deleted: false,
    },
    {
      id: 2,
      name: "jack reacher",
      items: 5,
      amount: 296,
      deleted: false,
    },
  ],
  selectedCustomerId: null,
};

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customerList.push(action.payload);
    },
    deleteCustomer: (state, action) => {
      state.customerList.forEach((customer) => {
        if (customer.id == action.payload) customer.deleted = true;
      });
    },
    setCurrentSelected: (state, action) => {
      state.selectedCustomerId = action.payload;
    },
  },
});

export default CustomerSlice.reducer;
export const { addCustomer, deleteCustomer, setCurrentSelected } =
  CustomerSlice.actions;
