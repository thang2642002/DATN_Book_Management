import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateCarts } from "../../../../services/cartsService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateCarts = (props) => {
  const { show, setShow, fetchListCarts, dataUpdate } = props;
  const handleClose = () => {
    setShow(false);
    setUserId("");
    setCreateDate("");
    setQuantity("");
  };
  const [userId, setUserId] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setUserId(dataUpdate.userId);
      setCreateDate(dataUpdate.createDate);
      setQuantity(dataUpdate.quantity);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!userId) {
      toast.error("Invalid username");
    }
    if (!createDate) {
      toast.error("Invalid date");
    }
    if (!quantity) {
      toast.error("Invalid quantity");
    }

    let data = await updateCarts(dataUpdate.id, {
      userId,
      createDate,
      quantity,
    });
    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListCarts();
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
          <Modal.Title>Update A Carts</Modal.Title>
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
              <label className="form-label">createDate</label>
              <input
                type="text"
                className="form-control"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateCarts;
