import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
// import { createUser } from "../../../../services/userService";
// import "./ModalCreatePayment.scss";

const ModalCreatePayment = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setOrderId("");
    setPaymentDate("");
    setAmount("");
    setPaymentMethod("");
    setTransactionId("");
  };
  const [orderId, setOrderId] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmitCreateUsers = async () => {
    if (!orderId) {
      toast.error("Ivalid name");
      return;
    }
    if (!paymentDate) {
      toast.error("Ivalid name");
      return;
    }
    if (!amount) {
      toast.error("Ivalid name");
      return;
    }
    if (!paymentMethod) {
      toast.error("Ivalid name");
      return;
    }
    if (!transactionId) {
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
          <Modal.Title>Craete New Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order ID</label>
              <input
                type="email"
                className="form-control"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Payment Date</label>
              <input
                type="password"
                className="form-control"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Amount</label>
              <input
                type="password"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">PaymentMethod</label>
              <input
                type="password"
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction Id</label>
              <input
                type="password"
                className="form-control"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
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

export default ModalCreatePayment;
