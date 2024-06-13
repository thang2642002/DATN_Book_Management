import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createPayment } from "../../../../services/paymentService";
// import "./ModalCreatePayment.scss";

const ModalCreatePayment = (props) => {
  const { show, setShow, fetchListPayment } = props;
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

  const handleSubmitCreatePayment = async () => {
    if (!orderId) {
      toast.error("Ivalid Order ID");
      return;
    }
    if (!paymentDate) {
      toast.error("Ivalid Payment Date");
      return;
    }
    if (!amount) {
      toast.error("Ivalid Amount");
      return;
    }
    if (!paymentMethod) {
      toast.error("Ivalid Payment Method");
      return;
    }
    if (!transactionId) {
      toast.error("Ivalid Transaction ID");
      return;
    }

    let data = await createPayment(
      orderId,
      paymentDate,
      amount,
      paymentMethod,
      transactionId
    );

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListPayment();
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
          <Modal.Title>Craete New Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order ID</label>
              <input
                type="text"
                className="form-control"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Payment Date</label>
              <input
                type="text"
                className="form-control"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Amount</label>
              <input
                type="text"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">PaymentMethod</label>
              <input
                type="text"
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction Id</label>
              <input
                type="text"
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
          <Button variant="primary" onClick={() => handleSubmitCreatePayment()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreatePayment;
