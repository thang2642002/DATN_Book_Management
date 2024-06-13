import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteAuthor } from "../../../../services/authorService";

const ModalDeleteAuthor = (props) => {
  const { show, setShow, dataDelete, fetchListAuthor } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteAuthor = async () => {
    const data = await deleteAuthor(dataDelete.id);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListAuthor();
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
          <Modal.Title>Modal Delete Author</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user.author_name ={" "}
          <b>
            {dataDelete && dataDelete.author_name ? dataDelete.author_name : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteAuthor();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteAuthor;
