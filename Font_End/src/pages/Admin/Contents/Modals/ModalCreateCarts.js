import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createCarts } from "../../../../services/cartsService";
// import "./ModalCreateCarts.scss";

const ModalCreateCarts = (props) => {
  const { show, setShow, fetchListCarts } = props;
  const handleClose = () => {
    setShow(false);
    setUserId("");
    setCreateDate("");
    setQuantity("");
  };
  const [userId, setUserId] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bookIds, setBookIds] = useState("");

  const handleSubmitCreateCarst = async () => {
    if (!userId) {
      toast.error("Ivalid id");
      return;
    }
    if (!createDate) {
      toast.error("Ivalid Date");
      return;
    }

    if (!quantity) {
      toast.error("Ivalid quantity");
      return;
    }

    if (!bookIds) {
      toast.error("Ivalid bookIds");
      return;
    }

    let data = await createCarts(userId, createDate, quantity, bookIds);

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
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Create Date</label>
              <input
                type="text"
                className="form-control"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
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
              <label className="form-label">BookId</label>
              <input
                type="text"
                className="form-control"
                value={bookIds}
                onChange={(e) => setBookIds(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateCarst()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateCarts;
