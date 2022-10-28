import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  setCurrentSelected,
  setShowModal,
} from "../features/customer/customerSlice";
import { CustomerType } from "./types";

type CustomerRowProps = {
  customer: CustomerType;
};

const CustomerRow = ({ customer }: CustomerRowProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleDelete = (id: number): void => {
    dispatch(setShowModal({ action: true, customerId: id }));
  };

  const handleUpdate = (id: number): void => {
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
          <AiFillEdit />
        </Button>
        <Button variant="danger" onClick={() => handleDelete(customer.id)}>
          <AiFillDelete />
        </Button>
      </td>
    </tr>
  );
};

export default CustomerRow;

// react data table v7 onwards

// search box, fuzzy search

// path resolver

// controlled forms + form validation(yup) + formik library
