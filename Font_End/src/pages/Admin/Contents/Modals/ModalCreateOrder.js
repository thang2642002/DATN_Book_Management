import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createOrder } from "../../../../services/orderService";
import { getListUser } from "../../../../services/userService";

// import "./ModalCreateOrder.scss";

const ModalCreateOrder = (props) => {
  const { show, setShow, fetchListOrder } = props;
  const handleClose = () => {
    setShow(false);
    setOrderDate("");
    setDescription("");
    setTotalPrice("");
    setUserId("");
  };
  const [orderDate, setOrderDate] = useState(Date);
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [userId, setUserId] = useState(1);
  const [nameUser, setNameUser] = useState([]);

  const handleSubmitCreateOrder = async () => {
    if (!orderDate) {
      toast.error("Ivalid Order Date");
      return;
    }
    if (!description) {
      toast.error("Ivalid Description");
      return;
    }

    if (!totalPrice) {
      toast.error("Ivalid Total Price");
      return;
    }

    if (!userId) {
      toast.error("Ivalid User ID");
      return;
    }

    let data = await createOrder(orderDate, description, totalPrice, userId);

    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListOrder();
    }
    if (data && data.errcode !== 0) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    fectchListUser();
  }, []);

  const fectchListUser = async () => {
    const dataUser = await getListUser();
    console.log("check data user", dataUser.data);
    setNameUser(dataUser.data);
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
          <Modal.Title>Craete New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order Date</label>
              <input
                type="text"
                className="form-control"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
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
              <label className="form-label">Total Price</label>
              <input
                type="text"
                className="form-control"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User ID</label>
              <select
                className="form-select"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              >
                {nameUser &&
                  nameUser.map((name, index) => {
                    return (
                      <option value={name.id} key={index + 1}>
                        {name.username}
                      </option>
                    );
                  })}
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateOrder()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateOrder;
