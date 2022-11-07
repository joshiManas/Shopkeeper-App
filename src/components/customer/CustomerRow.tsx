import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  setCurrentSelected,
  setShowModal,
} from "../../features/customer/customerSlice";
import { Row } from "react-table";
import { Data } from "../customer/CustomerList";

type CustomerRowProps = {
  rows: Row<Data>[];
  prepareRow: (row: Row<Data>) => void;
};

const CustomerRow = ({ rows, prepareRow }: CustomerRowProps) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number): void => {
    dispatch(setShowModal({ action: true, customerId: id }));
  };

  const handleUpdate = (id: number): void => {
    dispatch(setCurrentSelected(id));
  };

  return (
    <>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} className="text-center">
            {row.cells.map((cell) => {
              if (cell.column.Header == "Action")
                return (
                  <td {...cell.getCellProps()}>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(row.original.id)}
                      className="me-1"
                    >
                      <AiFillEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(row.original.id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                );
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </>
  );
};
export default CustomerRow;

// react data table v7 onwards

// search box, fuzzy search

// path resolver

// controlled forms + form validation(yup) + formik library
