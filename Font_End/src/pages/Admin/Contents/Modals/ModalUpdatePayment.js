import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UpdateUser } from "../../../../services/userService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdatePubliers = (props) => {
  const { show, setShow, fetchListUser, dataUpdate } = props;
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

  //   useEffect(() => {
  //     if (!_.isEmpty(dataUpdate)) {
  //       setEmail(dataUpdate.email);
  //       setAddress(dataUpdate.address);
  //       setUserName(dataUpdate.username);
  //       setPhone(dataUpdate.phone);
  //       setRole(dataUpdate.role);
  //       setImage("");
  //       setPreviewImage(`data:image/png;base64,${dataUpdate.avatar}`);
  //     }
  //   }, [dataUpdate]);

  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const base64String = await readFileAsBase64(file);
  //     setAvatar(base64String); // Lưu chuỗi base64 vào state
  //   }
  // };

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

    // let data = await UpdateUser(userName, address, phone, role, image);
    // console.log("check data: ", data);

    // if (data && data.errcode === 0) {
    //   toast.success(data.message);
    //   handleClose();
    //   await fetchListUser();
    // }
    // if (data && data.errcode !== 0) {
    //   toast.error(data.message);
    // }
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
          <Modal.Title>Update A Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order Id</label>
              <input
                type="email"
                className="form-control"
                value={orderId}
                disabled
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">paymentDate</label>
              <input
                type="password"
                className="form-control"
                value={paymentDate}
                disabled
                onChange={(e) => setPaymentDate(e.target.value)}
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
              <label className="form-label">Transaction ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdatePubliers;
