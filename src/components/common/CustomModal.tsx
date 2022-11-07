import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type CustomModalProps = {
  title: string;
  body: string;
  handleDelete: () => void;
  handleClose: () => void;
  show: boolean;
};

const CustomModal = ({
  title,
  body,
  handleDelete,
  handleClose,
  show,
}: CustomModalProps) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
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

export default CustomModal;
