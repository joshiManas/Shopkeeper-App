import {
  Row,
  TablePropGetter,
  TableProps,
  TableBodyPropGetter,
  TableBodyProps,
  HeaderGroup,
} from "react-table";
import { Table } from "react-bootstrap";
import { Data } from "components/customer/CustomerList";

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
    <Table bordered striped hover size="sm" variant="dark" {...getTableProps()}>
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
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="text-center">
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTable;
