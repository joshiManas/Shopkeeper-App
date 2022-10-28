import { createSlice } from "@reduxjs/toolkit";
import React, { Dispatch } from "react";
import { CustomerState } from "../../components/types";

/* type ActionType = {
  type: string;
  payload: number;
}; */

const initialState: CustomerState = {
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
  showModal: {
    action: false,
    customerId: null,
  },
};

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state: CustomerState, action) => {
      console.log(action);
      state.customerList.push(action.payload);
    },

    deleteCustomer: (state: CustomerState, action) => {
      state.customerList.forEach((customer, index) => {
        if (customer.id == action.payload) {
          state.customerList[index].deleted = true;
        }
      });
    },

    setCurrentSelected: (state: CustomerState, action) => {
      state.selectedCustomerId = action.payload;
    },

    updateCustomer: (state: CustomerState, action) => {
      state.customerList.forEach((c, index) => {
        if (c.id == action.payload.id) {
          state.customerList[index] = action.payload;
        }
      });
    },

    setShowModal: (state: CustomerState, action) => {
      state.showModal = action.payload;
    },
  },
});

export default CustomerSlice.reducer;
export const {
  addCustomer,
  deleteCustomer,
  setCurrentSelected,
  updateCustomer,
  setShowModal,
} = CustomerSlice.actions;
