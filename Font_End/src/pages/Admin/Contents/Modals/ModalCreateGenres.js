import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createGenres } from "../../../../services/genresService";
// import "./ModalCreateGenres.scss";

const ModalCreateGenres = (props) => {
  const { show, setShow, fetchListGenres } = props;
  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitCreateGenres = async () => {
    if (!name) {
      toast.error("Ivalid name");
      return;
    }
    let data = await createGenres(name, description);

    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListGenres();
    }
    if (data && data.errcode !== 0) {
      toast.error(data.message);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Craete New Genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateGenres()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateGenres;
