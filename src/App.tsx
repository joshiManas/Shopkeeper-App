import React from "react";
import "./App.css";
import CustomerTable from "./components/CustomerTable";
import DeleteModal from "./components/DeleteModal";
import UserForm from "./components/UserForm";

const App = (): JSX.Element => {
  return (
    <div className="vh-100 d-flex justify-content-around align-items-start pt-5 flex-wrap bg-light">
      <CustomerTable />
      <UserForm />
      <DeleteModal />
    </div>
  );
};

export default App;
