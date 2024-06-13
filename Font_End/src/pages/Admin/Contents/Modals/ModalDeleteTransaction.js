import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteTransaction } from "../../../../services/transactionService";

const ModalDeleteTransaction = (props) => {
  const { show, setShow, dataDelete, fetchListTransaction } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteTransaction = async () => {
    const data = await deleteTransaction(dataDelete.id);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListTransaction();
      handleClose();
    }
    if (data && data.errcode !== 0) {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Delete Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Transaction.bookId ={" "}
          <b>{dataDelete && dataDelete.bookId ? dataDelete.bookId : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteTransaction();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteTransaction;
