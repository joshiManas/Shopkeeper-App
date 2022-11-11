import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CustomerType = {
  id: number;
  name: string;
  items: string;
  amount: string;
  deleted: boolean;
  display: boolean;
};

type ModalType = {
  action: boolean;
  customerId: number | null;
};

type InitialState = {
  customerList: CustomerType[];
  selectedCustomerId: number | null;
  showModal: ModalType;
};

const initialState: InitialState = {
  customerList: [],
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
    setAllCustomers: (
      state: InitialState,
      action: PayloadAction<CustomerType[]>
    ) => {
      state.customerList = action.payload;
    },

    addCustomer: (state: InitialState, action: PayloadAction<CustomerType>) => {
      state.customerList.push(action.payload);
    },

    deleteCustomer: (
      state: InitialState,
      action: PayloadAction<number | null>
    ) => {
      state.customerList.forEach((customer, index) => {
        if (customer.id == action.payload) {
          state.customerList[index].deleted = true;
        }
      });
    },

    setCurrentSelected: (
      state: InitialState,
      action: PayloadAction<number | null>
    ) => {
      state.selectedCustomerId = action.payload;
    },

    updateCustomer: (
      state: InitialState,
      action: PayloadAction<CustomerType>
    ) => {
      state.customerList.forEach((c, index) => {
        if (c.id == action.payload.id) {
          state.customerList[index] = action.payload;
        }
      });
    },

    setShowModal: (state: InitialState, action: PayloadAction<ModalType>) => {
      state.showModal = action.payload;
    },

    searchCustomer: (state: InitialState, action: PayloadAction<string>) => {
      if (action.payload == "") {
        state.customerList.forEach((c) => {
          c.display = true;
        });
        return;
      }
      /*  state.customerList.forEach((c) => {
        const index = c.name.search(action.payload);
        if (index < 0) c.display = false;
      }); */

      /* FUZZY SEARCH */
      state.customerList.forEach((c) => {
        let text = c.name.split("");
        const query = action.payload;
        let searchPosition = 0;
        text.forEach((textChar) => {
          if (textChar == query[searchPosition]) {
            searchPosition += 1;
            if (searchPosition >= query.length) {
              c.display = true;
              return;
            }
          }
        });
        if (searchPosition < query.length) c.display = false;
      });
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
  searchCustomer,
  setAllCustomers,
} = CustomerSlice.actions;
