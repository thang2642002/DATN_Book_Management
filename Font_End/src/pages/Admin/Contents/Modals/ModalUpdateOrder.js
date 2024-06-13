import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateOrder } from "../../../../services/orderService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateOrder = (props) => {
  const { show, setShow, fetchListOrder, dataUpdate } = props;
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

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setOrderDate(dataUpdate.order_date);
      setDescription(dataUpdate.description);
      setTotalPrice(dataUpdate.totalPrice);
      setUserId(
        dataUpdate?.User?.id ? dataUpdate?.User?.id : dataUpdate.userId
      );
      // setUserId(dataUpdate.userId);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!orderDate) {
      toast.error("Invalid username");
    }
    if (!description) {
      toast.error("Invalid address");
    }
    if (!totalPrice) {
      toast.error("Invalid phone");
    }

    if (!userId) {
      toast.error("Invalid bio");
    }

    let data = await updateOrder(dataUpdate.id, {
      order_date: orderDate,
      description,
      totalPrice,
      userId,
    });

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListOrder();
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
          <Modal.Title>Update A Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                value={userId}
                disabled
                onChange={(e) => setUserId(e.target.value)}
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
            <div className="col-12">
              <label className="form-label">Total Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Order Date</label>
              <input
                type="text"
                className="form-control"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
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

export default ModalUpdateOrder;
