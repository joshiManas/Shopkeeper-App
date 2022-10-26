import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

import {
  setCurrentSelected,
  deleteCustomer,
} from "../features/customer/customerSlice";

function CustomerRow({ customer }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  const handleUpdate = (id) => {
    dispatch(setCurrentSelected(id));
  };
  return (
    <tr className="text-center">
      <td>{customer.name}</td>
      <td>{customer.items}</td>
      <td>{customer.amount}</td>
      <td>
        <Button
          variant="primary"
          onClick={() => handleUpdate(customer.id)}
          className="me-1"
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDelete(customer.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CustomerRow;
