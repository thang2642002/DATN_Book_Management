import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteOrderDetails } from "../../../../services/orderDetailsService";

const ModalDeleteOrderDetails = (props) => {
  const { show, setShow, dataDelete, fetchListOrderDetails } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteOrderDetails = async () => {
    console.log("dataDelete: ", dataDelete);
    const data = await deleteOrderDetails(dataDelete.id);
    console.log("data:", data);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListOrderDetails();
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
          <Modal.Title>Modal Delete OrderDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this OrderDetails.bookId ={" "}
          <b>{dataDelete && dataDelete.bookId ? dataDelete.bookId : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteOrderDetails();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteOrderDetails;
