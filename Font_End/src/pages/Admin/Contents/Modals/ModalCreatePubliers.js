import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createSuppliers } from "../../../../services/publiersService";
// import "./ModalCreatePubliers.scss";

const ModalCreatePubliers = (props) => {
  const { show, setShow, fetchListPubliers } = props;
  const handleClose = () => {
    setShow(false);
    setName("");
    setContactInfo("");
    setDescription("");
    setPhone("");
    setEmail("");
  };
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmitCreatePubliers = async () => {
    if (!name) {
      toast.error("Ivalid name");
      return;
    }
    if (!contactInfo) {
      toast.error("Ivalid contact info");
      return;
    }

    if (!phone) {
      toast.error("Ivalid phone");
      return;
    }

    if (!email) {
      toast.error("Ivalid email");
      return;
    }

    let data = await createSuppliers(
      name,
      contactInfo,
      description,
      phone,
      email
    );

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListPubliers();
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
          <Modal.Title>Craete New Publiers</Modal.Title>
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
              <label className="form-label">Contact Info</label>
              <input
                type="text"
                className="form-control"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
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
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubmitCreatePubliers()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreatePubliers;
