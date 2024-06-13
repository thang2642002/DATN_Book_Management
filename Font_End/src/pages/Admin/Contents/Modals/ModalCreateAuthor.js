import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createAuthor } from "../../../../services/authorService";
// import "./ModalCreateAuthor.scss";

const ModalCreateAuthor = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setName("");
    setAddress("");
    setPhone("");
    setBio("");
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmitCreateAuthor = async () => {
    if (!name) {
      toast.error("Ivalid name");
      return;
    }
    if (!address) {
      toast.error("Ivalid address");
      return;
    }

    if (!phone) {
      toast.error("Ivalid phone");
      return;
    }

    if (!bio) {
      toast.error("Ivalid bio");
      return;
    }

    let data = await createAuthor(name, address, phone, bio);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListUser();
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
          <Modal.Title>Craete New Author</Modal.Title>
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
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Bio</label>
              <input
                type="text"
                className="form-control"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateAuthor()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateAuthor;
