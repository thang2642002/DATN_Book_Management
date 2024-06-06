import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteCarts } from "../../../../services/cartsService";

const ModalDeleteCarts = (props) => {
  const { show, setShow, dataDelete, fetchListCarts } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteCarts = async () => {
    const data = await deleteCarts(dataDelete.id);
    console.log("data:", data);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListCarts();
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
          <Modal.Title>Modal Delete Carts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this carts.userId =
          <b>{dataDelete && dataDelete.userId ? dataDelete.userId : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteCarts();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteCarts;
