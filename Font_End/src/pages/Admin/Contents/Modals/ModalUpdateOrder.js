import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UpdateUser } from "../../../../services/userService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateOrder = (props) => {
  const { show, setShow, fetchListUser, dataUpdate } = props;
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
          <Modal.Title>Update A Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Order Date</label>
              <input
                type="email"
                className="form-control"
                value={orderDate}
                disabled
                onChange={(e) => setOrderDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="password"
                className="form-control"
                value={description}
                disabled
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
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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
