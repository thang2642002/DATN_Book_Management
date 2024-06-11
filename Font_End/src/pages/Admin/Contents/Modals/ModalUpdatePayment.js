import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updatePayment } from "../../../../services/paymentService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdatePubliers = (props) => {
  const { show, setShow, fetchListPayment, dataUpdate } = props;
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

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setOrderId(dataUpdate.Order_Book.id);
      setPaymentDate(dataUpdate.paymentDate);
      setAmount(dataUpdate.amount);
      setPaymentMethod(dataUpdate.paymnetMethod);
      setTransactionId(dataUpdate.transactionId);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!orderId) {
      toast.error("Invalid username");
    }
    if (!paymentDate) {
      toast.error("Invalid contact");
    }
    if (!amount) {
      toast.error("Invalid phone");
    }

    if (!paymentMethod) {
      toast.error("Invalid email");
    }
    if (!transactionId) {
      toast.error("Invalid email");
    }

    let data = await updatePayment(dataUpdate.id, {
      orderId,
      paymentDate,
      amount,
      paymentMethod,
      transactionId,
    });
    console.log("check data: ", data);

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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update A Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order Id</label>
              <input
                type="text"
                className="form-control"
                value={orderId}
                disabled
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction ID</label>
              <input
                type="text"
                className="form-control"
                value={transactionId}
                disabled
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Payment Method</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">paymentDate</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
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
