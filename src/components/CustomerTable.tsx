import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerRow from "./CustomerRow";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { CustomerType, GlobalState } from "./types";
import { searchCustomer } from "../features/customer/customerSlice";

const Customer = () => {
  const customers = useSelector(
    (state: GlobalState): CustomerType[] => state.customer.customerList
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    dispatch(searchCustomer(query));
  };

  return (
    <div className="flex-fill px-5">
      <h2 className="text-center text-primary">Customer details</h2>
      <Form className="mb-3 w-75 mx-auto">
        <Form.Control
          type="text"
          placeholder="search by name..."
          onChange={handleChange}
        />
      </Form>
      <Table bordered>
        <thead className="table-light text-center">
          <tr>
            <th>Name</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            if (!customer.deleted && customer.display)
              return <CustomerRow key={customer.id} customer={customer} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
