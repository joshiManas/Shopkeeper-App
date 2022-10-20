import Customer from "./components/Customer";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <div className='vh-100 d-flex justify-content-around pt-5 flex-wrap'>
      <Customer />
      <Form />
    </div>
  );
};

export default App;
