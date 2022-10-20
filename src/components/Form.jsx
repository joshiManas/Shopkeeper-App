import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../features/customer/customerSlice";

const Form = () => {
  const { customerList: customers, selectedCustomerId } = useSelector(
    (state) => state.customer
  );
  const dispatch = useDispatch();

  // refilling the form
  useEffect(() => {
    if (selectedCustomerId) {
      const customer = customers.find(
        (customer) => customer.id == selectedCustomerId
      );
      const fullname = customer.name.split(" ");
      fnameRef.current.value = fullname[0];
      lnameRef.current.value = fullname[1];
      itemsRef.current.value = customer.items;
      amountRef.current.value = customer.amount;
    }
  }, [selectedCustomerId]);

  // refrences for dom nodes
  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const itemsRef = useRef("");
  const amountRef = useRef("");

  // handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: customers.length + 1,
      name: fnameRef.current.value + " " + lnameRef.current.value,
      items: itemsRef.current.value,
      amount: amountRef.current.value,
      delete: false,
    };
    dispatch(addCustomer(task));

    // clearing the form
    fnameRef.current.value = "";
    lnameRef.current.value = "";
    itemsRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <div className='flex-fill'>
      <h2 className='text-center text-primary mb-4'>Add/Edit Customer List</h2>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        {/* FIRST NAME  */}
        <div className='mb-3 row'>
          <label htmlFor='fname' className='col-sm-2 col-form-label'>
            First Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='fname'
              placeholder='type your first name...'
              ref={fnameRef}
            />
          </div>
        </div>
        {/* LAST NAME  */}
        <div className='mb-3 row'>
          <label htmlFor='lname' className='col-sm-2 col-form-label'>
            Last Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='lname'
              placeholder='type your last name...'
              ref={lnameRef}
            />
          </div>
        </div>
        {/* ITEMS  */}
        <div className='mb-3 row'>
          <label htmlFor='items' className='col-sm-2 col-form-label'>
            Items
          </label>
          <div className='col-sm-10'>
            <input
              type='number'
              class='form-control'
              id='items'
              placeholder='total items...'
              ref={itemsRef}
            />
          </div>
        </div>
        {/* AMOUNT  */}
        <div className='mb-3 row'>
          <label htmlFor='amount' className='col-sm-2 col-form-label'>
            Amount
          </label>
          <div className='col-sm-10'>
            <input
              type='number'
              class='form-control'
              id='amount'
              placeholder='total amount...'
              ref={amountRef}
            />
          </div>
        </div>
        {/* UPDATE BTN  */}
        <div className='text-center'>
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
