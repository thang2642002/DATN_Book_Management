import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createTransaction } from "../../../../services/transactionService";
// import "./ModalCreateTransaction.scss";

const ModalCreateTransaction = (props) => {
  const { show, setShow, fetchListTransaction } = props;
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

  const handleSubmitCreateTransaction = async () => {
    if (!transactionDate) {
      toast.error("Ivalid Transaction Date");
      return;
    }
    if (!transactionType) {
      toast.error("Ivalid Transaction Type");
      return;
    }
    if (!bookId) {
      toast.error("Ivalid Book ID");
      return;
    }
    if (!quantity) {
      toast.error("Ivalid Quantity");
      return;
    }
    if (!price) {
      toast.error("Ivalid Price");
      return;
    }

    let data = await createTransaction(
      transactionDate,
      transactionType,
      bookId,
      quantity,
      price
    );

    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListTransaction();
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
          <Modal.Title>Craete New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Transaction Date</label>
              <input
                type="text"
                className="form-control"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction Type</label>
              <input
                type="text"
                className="form-control"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">BookId</label>
              <input
                type="text"
                className="form-control"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input
                type="text"
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
          <Button
            variant="primary"
            onClick={() => handleSubmitCreateTransaction()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateTransaction;
