import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteBook } from "../../../../services/BookService";

const ModalDeleteBooks = (props) => {
  const { show, setShow, dataDelete, fetchListBooks } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    console.log("check data: ", dataDelete.id);

    const data = await deleteBook(dataDelete.id);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListBooks();
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
          <Modal.Title>Modal Delete Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user.title ={" "}
          <b>{dataDelete && dataDelete.title ? dataDelete.title : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteBooks;
