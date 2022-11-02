import React from "react";
import CustomerRow from "@components/CustomerRow";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { searchCustomer } from "../features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Customer = () => {
  const customers = useAppSelector((state) => state.customer.customerList);
  const dispatch = useAppDispatch();

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
