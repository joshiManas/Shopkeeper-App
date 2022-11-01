import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setShowModal,
  deleteCustomer,
} from "../features/customer/customerSlice";

const DeleteModal = () => {
  let { action: show, customerId: id } = useAppSelector(
    (state) => state.customer.showModal
  );

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setShowModal({ action: false, customerId: null }));
  };

  const handleDelete = () => {
    dispatch(deleteCustomer(id));
    dispatch(setShowModal({ action: false, customerId: null }));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
