import "./App.css";
import CustomerTable from "./components/CustomerTable.jsx";
import DeleteModal from "./components/DeleteModal";
import UserForm from "./components/UserForm.jsx";

const App = () => {
  return (
    <div className="vh-100 d-flex justify-content-around align-items-start pt-5 flex-wrap bg-light">
      <CustomerTable />
      <UserForm />
      <DeleteModal />
    </div>
  );
};

export default App;
