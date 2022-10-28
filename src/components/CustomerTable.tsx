import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomerRow from "./CustomerRow";
import Table from "react-bootstrap/Table";

import { CustomerType, GlobalState } from "./types";

const Customer = () => {
  const customers = useSelector(
    (state: GlobalState): CustomerType[] => state.customer.customerList
  );

  return (
    <div className="flex-fill px-5">
      <h2 className="text-center text-primary">Customer details</h2>
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
            if (!customer.deleted)
              return <CustomerRow key={customer.id} customer={customer} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
