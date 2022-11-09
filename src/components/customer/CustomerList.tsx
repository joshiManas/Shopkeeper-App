import React from "react";
import { searchCustomer } from "features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Column, useTable } from "react-table";
import CustomTable from "../common/CustomTable";
import CustomSearchBox from "../common/CustomSearchBox";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  setCurrentSelected,
  setShowModal,
} from "features/customer/customerSlice";

export interface Data {
  name: string;
  items: string;
  amount: string;
  id: number;
}

const Customer = () => {
  const customers = useAppSelector((state) => state.customer.customerList);
  const dispatch = useAppDispatch();

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
      accessor: (props: Data) => {
        console.log(props, typeof props);
        return (
          <>
            <Button
              variant="primary"
              onClick={() => handleUpdate(props.id)}
              className="me-1"
            >
              <AiFillEdit />
            </Button>
            <Button variant="danger" onClick={() => handleDelete(props.id)}>
              <AiFillDelete />
            </Button>
          </>
        );
      },
    },
  ];

  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => {
    return customers.filter(
      (customer) => !customer.deleted && customer.display
    );
  }, [customers]);

  /* CREATING THE TABLE INSTANCE */
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    useTable({
      columns,
      data,
    });

  const handleDelete = (id: number): void => {
    dispatch(setShowModal({ action: true, customerId: id }));
  };

  const handleUpdate = (id: number): void => {
    dispatch(setCurrentSelected(id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const query = event.target.value.toLowerCase();
    dispatch(searchCustomer(query));
  };

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

// react data table v7 onwards

// search box, fuzzy search

// path resolver

// controlled forms + form validation(yup) + formik library
