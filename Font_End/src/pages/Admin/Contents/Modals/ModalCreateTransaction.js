import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { createUser } from "../../../../services/userService";
// import "./ModalCreateTransaction.scss";

const ModalCreateTransaction = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setTransactionDate("");
    setTransactionType("");
    setBookId("");
    setQuantity("");
    setPrice("");
  };
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [bookId, setBookId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmitCreateUsers = async () => {
    if (!transactionDate) {
      toast.error("Ivalid name");
      return;
    }
    if (!transactionType) {
      toast.error("Ivalid name");
      return;
    }
    if (!bookId) {
      toast.error("Ivalid name");
      return;
    }
    if (!quantity) {
      toast.error("Ivalid name");
      return;
    }
    if (!price) {
      toast.error("Ivalid name");
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
          <Modal.Title>Craete New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Transaction Date</label>
              <input
                type="email"
                className="form-control"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction Type</label>
              <input
                type="password"
                className="form-control"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">BookId</label>
              <input
                type="password"
                className="form-control"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
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
            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input
                type="password"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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

export default ModalCreateTransaction;
