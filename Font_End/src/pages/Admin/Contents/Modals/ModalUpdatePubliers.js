import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateSuppliers } from "../../../../services/publiersService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdatePubliers = (props) => {
  const { show, setShow, fetchListPubliers, dataUpdate } = props;
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

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.suppliers_name);
      setContactInfo(dataUpdate.contact_info);
      setDescription(dataUpdate.description);
      setPhone(dataUpdate.phone);
      setEmail(dataUpdate.email);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!name) {
      toast.error("Invalid username");
    }
    if (!contactInfo) {
      toast.error("Invalid contact");
    }
    if (!phone) {
      toast.error("Invalid phone");
    }

    if (!email) {
      toast.error("Invalid email");
    }

    let data = await updateSuppliers(dataUpdate.id, {
      suppliers_name: name,
      contact_info: contactInfo,
      description,
      phone,
      email,
    });

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
          <Modal.Title>Update A Publiers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="email"
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
            <div className="col-12">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdatePubliers;
