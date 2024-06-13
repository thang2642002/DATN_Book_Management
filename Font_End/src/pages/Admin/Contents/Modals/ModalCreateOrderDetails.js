import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createOrderDetails } from "../../../../services/orderDetailsService";
// import "./ModalCreateOrderDetails.scss";

const ModalCreateOrderDetails = (props) => {
  const { show, setShow, fetchListOrderDetails } = props;
  const handleClose = () => {
    setShow(false);
    setQuantity("");
    setUnitPrice("");
    setDescription("");
    setOrderId("");
    setBookId("");
  };
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [description, setDescription] = useState("");
  const [orderId, setOrderId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleSubmitCreateOrderDetails = async () => {
    if (!quantity) {
      toast.error("Ivalid quantity");
      return;
    }
    if (!unitPrice) {
      toast.error("Ivalid unit Price");
      return;
    }

    if (!orderId) {
      toast.error("Ivalid Order ID");
      return;
    }

    if (!bookId) {
      toast.error("Ivalid book ID");
      return;
    }

    let data = await createOrderDetails(
      quantity,
      unitPrice,
      description,
      orderId,
      bookId
    );

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListOrderDetails();
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
          <Modal.Title>Craete New Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
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
              <label className="form-label">Unit Price</label>
              <input
                type="text"
                className="form-control"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
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
              <label className="form-label">Order ID</label>
              <input
                type="text"
                className="form-control"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Book ID</label>
              <input
                type="text"
                className="form-control"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
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
            onClick={() => handleSubmitCreateOrderDetails()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateOrderDetails;
