import React from "react";
import CustomerRow from "./CustomerRow";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { searchCustomer } from "../features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Column, useTable } from "react-table";

export interface Data {
  name: string;
  items: string;
  amount: string;
  id: number;
  deleted: boolean;
  display: boolean;
}

const COLUMNS: Column<Data>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Items",
    accessor: "items",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Action",
  },
];

const Customer = () => {
  const customers = useAppSelector((state) => state.customer.customerList);
  const dispatch = useAppDispatch();
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => customers, [customers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    dispatch(searchCustomer(query));
  };

  /* CREATING THE TABLE INSTANCE */

  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="flex-fill px-5">
      <h2 className="text-center text-primary">Customer details</h2>
      {/* SEARCH FIELD */}
      <Form className="mb-3 w-75 mx-auto">
        <Form.Control
          type="text"
          placeholder="search by name..."
          onChange={handleChange}
        />
      </Form>
      {/* CUSTOMER TABLE  */}
      <Table bordered {...getTableProps()}>
        <thead className="table-light text-center">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/*  {customers.map((customer) => {
            if (!customer.deleted && customer.display)
              return <CustomerRow key={customer.id} customer={customer} />;
          })} */}

          <CustomerRow rows={rows} prepareRow={prepareRow} />
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
