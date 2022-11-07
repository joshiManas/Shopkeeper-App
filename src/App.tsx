import React from "react";
import "./App.css";
import CustomerList from "./components/customer/CustomerList";
import CustomerDeleteModal from "./components/customer/CustomerDeleteModal";
import CustomerDetailsInput from "./components/customer/CustomerDetailsInput";

const App = (): JSX.Element => {
  return (
    <div className="vh-100 d-flex flex-wrap justify-content-around align-items-start pt-5 flex-wrap bg-light">
      <CustomerList />
      <CustomerDetailsInput />
      <CustomerDeleteModal
        title="Delete Customer"
        body="Are you sure want to delete?"
      />
    </div>
  );
};

export default App;
