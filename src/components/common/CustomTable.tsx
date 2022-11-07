import {
  Row,
  TablePropGetter,
  TableProps,
  TableBodyPropGetter,
  TableBodyProps,
  HeaderGroup,
} from "react-table";
import { Table } from "react-bootstrap";
import CustomerRow from "../customer/CustomerRow";
import { Data } from "../customer/CustomerList";

type CustomTableProps = {
  rows: Row<Data>[];
  getTableProps: (propGetter?: TablePropGetter<Data> | undefined) => TableProps;
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<Data> | undefined
  ) => TableBodyProps;
  prepareRow: (row: Row<Data>) => void;
  headerGroups: HeaderGroup<Data>[];
};

const CustomTable = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  rows,
}: CustomTableProps) => {
  return (
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
        <CustomerRow rows={rows} prepareRow={prepareRow} />
      </tbody>
    </Table>
  );
};

export default CustomTable;
