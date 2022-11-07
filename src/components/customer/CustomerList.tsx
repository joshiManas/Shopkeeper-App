import React from "react";
import { searchCustomer } from "features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Column, useTable } from "react-table";
import CustomTable from "../common/CustomTable";
import CustomSearchBox from "../common/CustomSearchBox";

export interface Data {
  name: string;
  items: string;
  amount: string;
  id: number;
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
  const data = React.useMemo(() => {
    return customers.filter(
      (customer) => !customer.deleted && customer.display
    );
  }, [customers]);

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
      <CustomSearchBox
        handleChange={handleChange}
        placeholderText="search by name..."
      />
      {/* CUSTOMER TABLE  */}
      <CustomTable
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
        headerGroups={headerGroups}
      />
    </div>
  );
};

export default Customer;
