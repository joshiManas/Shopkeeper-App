import { useSelector, useDispatch } from "react-redux";
import {
  deleteCustomer,
  setCurrentSelected,
} from "../features/customer/customerSlice";

const Customer = () => {
  const customers = useSelector((state) => state.customer.customerList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const handleUpdate = (id) => {
    dispatch(setCurrentSelected(id));
  };
  return (
    <div className='text-center flex-fill'>
      <h2 className='text-primary'>Customer details</h2>
      <table className='table w-75 mx-auto table-bordered'>
        <thead className='table-light'>
          <tr>
            <th>Name</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            if (!customer.deleted)
              return (
                <tr>
                  <td>{customer.name}</td>
                  <td>{customer.items}</td>
                  <td>{customer.amount}</td>
                  <td>
                    <button
                      className='btn btn-primary me-1'
                      onClick={() => handleUpdate(customer.id)}
                    >
                      Edit
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
