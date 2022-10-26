import CustomerTable from "./components/CustomerTable.jsx";
import "./App.css";
import UserForm from "./components/UserForm.jsx";

const App = () => {
  return (
    <div className="vh-100 d-flex justify-content-around align-items-start pt-5 flex-wrap">
      <CustomerTable />
      <UserForm />
    </div>
  );
};

export default App;
