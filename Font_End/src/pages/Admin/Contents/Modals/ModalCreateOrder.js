import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { createUser } from "../../../../services/userService";
// import "./ModalCreateOrder.scss";

const ModalCreateOrder = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setOrderDate("");
    setDescription("");
    setTotalPrice("");
    setUserId("");
  };
  const [orderDate, setOrderDate] = useState("");
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmitCreateUsers = async () => {
    if (!orderDate) {
      toast.error("Ivalid name");
      return;
    }
    if (!description) {
      toast.error("Ivalid address");
      return;
    }

    if (!totalPrice) {
      toast.error("Ivalid phone");
      return;
    }

    if (!userId) {
      toast.error("Ivalid bio");
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
              <label className="form-label">Order Date</label>
              <input
                type="email"
                className="form-control"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="password"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Total Price</label>
              <input
                type="password"
                className="form-control"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User ID</label>
              <input
                type="password"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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

export default ModalCreateOrder;
