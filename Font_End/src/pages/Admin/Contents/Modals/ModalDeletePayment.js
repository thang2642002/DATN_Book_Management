import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deletePayment } from "../../../../services/paymentService";

const ModalDeletePayment = (props) => {
  const { show, setShow, dataDelete, fetchListPayment } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeletePayment = async () => {
    const data = await deletePayment(dataDelete.id);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListPayment();
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
          <Modal.Title>Modal Delete Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Payment.orderId ={" "}
          <b>{dataDelete && dataDelete.orderId ? dataDelete.orderId : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeletePayment();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeletePayment;
