import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteOrder } from "../../../../services/orderService";

const ModalDeleteOrder = (props) => {
  const { show, setShow, dataDelete, fetchListOrder } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteOrder = async () => {
    console.log("dataDelete: ", dataDelete);
    const data = await deleteOrder(dataDelete.id);
    console.log("data:", data);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListOrder();
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
          <Modal.Title>Modal Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Order.userId ={" "}
          <b>{dataDelete && dataDelete.userId ? dataDelete.userId : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteOrder();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteOrder;
