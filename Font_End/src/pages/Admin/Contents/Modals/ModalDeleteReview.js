import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteReview } from "../../../../services/reviewService";

const ModalDeleteReview = (props) => {
  const { show, setShow, dataDelete, fetchListReview } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteReview = async () => {
    const data = await deleteReview(dataDelete.id);
    console.log("data:", data);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListReview();
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
          <Modal.Title>Modal Delete Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this review.comment ={" "}
          <b>{dataDelete && dataDelete.comment ? dataDelete.comment : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteReview();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteReview;
