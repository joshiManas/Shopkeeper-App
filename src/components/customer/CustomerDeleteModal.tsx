import CustomModal from "../common/CustomModal";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setShowModal, deleteCustomer } from "features/customer/customerSlice";

type CustomerDeleteModalProps = {
  title: string;
  body: string;
};

const CustomerDeleteModal = ({ title, body }: CustomerDeleteModalProps) => {
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
    <CustomModal
      title={title}
      body={body}
      handleDelete={handleDelete}
      handleClose={handleClose}
      show={show}
    />
  );
};

export default CustomerDeleteModal;
