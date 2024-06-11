import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateGenres } from "../../../../services/genresService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateGenres = (props) => {
  const { show, setShow, dataUpdate, fetchListGenres } = props;
  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.genres_name);
      setDescription(dataUpdate.description);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!name) {
      toast.error("Invalid name");
    }

    if (!description) {
      toast.error("Invalid description");
    }

    let data = await updateGenres(name, description, dataUpdate.id);
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update A Genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label"> Name Genres</label>
              <input
                type="email"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateGenres;
