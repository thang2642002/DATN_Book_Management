import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UpdateUser } from "../../../../services/userService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateTransaction = (props) => {
  const { show, setShow, fetchListUser, dataUpdate } = props;
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
    if (!transactionDate) {
      toast.error("Invalid username");
    }
    if (!transactionType) {
      toast.error("Invalid contact");
    }
    if (!bookId) {
      toast.error("Invalid phone");
    }

    if (!quantity) {
      toast.error("Invalid email");
    }
    if (!price) {
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
          <Modal.Title>Update A Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Transaction Date</label>
              <input
                type="email"
                className="form-control"
                value={transactionDate}
                disabled
                onChange={(e) => setTransactionDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Transaction Type</label>
              <input
                type="password"
                className="form-control"
                value={transactionType}
                disabled
                onChange={(e) => setTransactionType(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">BookId</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateTransaction;
