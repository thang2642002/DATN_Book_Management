import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateAuthor } from "../../../../services/authorService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateAuthor = (props) => {
  const { show, setShow, fetchListAuthor, dataUpdate } = props;
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

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.author_name);
      setAddress(dataUpdate.address);
      setPhone(dataUpdate.phone);
      setBio(dataUpdate.bio);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!name) {
      toast.error("Invalid username");
    }
    if (!address) {
      toast.error("Invalid address");
    }
    if (!phone) {
      toast.error("Invalid phone");
    }
    if (!bio) {
      toast.error("Invalid bio");
    }

    let data = await updateAuthor(dataUpdate.id, {
      author_name: name,
      address,
      phone,
      bio,
    });
    console.log("check data: ", data);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListAuthor();
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
          <Modal.Title>Update A Author</Modal.Title>
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
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Bio</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateAuthor;
