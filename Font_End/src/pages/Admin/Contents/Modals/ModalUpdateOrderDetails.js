import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateOrderDetails } from "../../../../services/orderDetailsService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateOrderDetails = (props) => {
  const { show, setShow, fetchListOrderDetails, dataUpdate } = props;
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

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setQuantity(dataUpdate.quantity);
      setUnitPrice(dataUpdate.unit_price);
      setDescription(dataUpdate.description);
      setOrderId(dataUpdate.orderId);
      setBookId(dataUpdate.bookId);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!quantity) {
      toast.error("Invalid quantity");
    }
    if (!unitPrice) {
      toast.error("Invalid unitPrice");
    }

    let data = await updateOrderDetails(dataUpdate.id, {
      quantity,
      description,
      orderId,
      bookId,
      unit_price: unitPrice,
    });
    console.log("check data: ", data);

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
          <Modal.Title>Update A Order Details</Modal.Title>
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
            <div className="col-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Order ID</label>
              <input
                type="text"
                className="form-control"
                disabled
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Book ID</label>
              <input
                type="text"
                className="form-control"
                disabled
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateOrderDetails;
