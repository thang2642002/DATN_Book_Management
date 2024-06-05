import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteGenres } from "../../../../services/genresService";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete, fetchListGenres } = props;
  const handleClose = () => setShow(false);

  const ModalDeleteGenres = async () => {
    console.log("check data: ", dataDelete);

    const data = await deleteGenres(dataDelete.id);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListGenres();
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
          <Modal.Title>Modal Delete Genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this genres.genres_name ={" "}
          <b>
            {dataDelete && dataDelete.genres_name ? dataDelete.genres_name : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              ModalDeleteGenres();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
