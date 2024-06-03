import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { createUser } from "../../../../services/userService";
// import "./ModalCreateAuthor.scss";

const ModalCreateAuthor = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setUserId("");
    setCreateDate("");
    setQuantity("");
  };
  const [userId, setUserId] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmitCreateUsers = async () => {
    if (!userId) {
      toast.error("Ivalid id");
      return;
    }
    if (!createDate) {
      toast.error("Ivalid Date");
      return;
    }

    if (!quantity) {
      toast.error("Ivalid quantity");
      return;
    }

    // let data = await createUser(
    //   email,
    //   password,
    //   username,
    //   address,
    //   phone,
    //   role,
    //   image
    // );

    // console.log("check data: ", data);

    // if (data && data.errcode === 0) {
    //   toast.success(data.message);
    //   handleClose();
    //   await fetchListUser();
    // }
    // if (data && data.errcode !== 0) {
    //   toast.error(data.message);
    // }

    // console.log("check res: ", res.data);
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
              <label className="form-label">User ID</label>
              <input
                type="email"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Create Date</label>
              <input
                type="password"
                className="form-control"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Quantity</label>
              <input
                type="password"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateAuthor;
