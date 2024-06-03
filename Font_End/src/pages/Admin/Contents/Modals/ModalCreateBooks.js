import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
// import { createUser } from "../../../../services/userService";
// import "./ModalCreateBook.scss";

const ModalCreateBook = (props) => {
  const { show, setShow, fetchListUser } = props;
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setImgBook("");
    setAuthordId("");
    setGenresId("");
    setPrice("");
    setQuantity("");
    setSalse("");
    setPreviewImage("");
  };
  const [title, setTitle] = useState("");
  const [img_book, setImgBook] = useState("");
  const [authorId, setAuthordId] = useState("");
  const [genresId, setGenresId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [salse, setSalse] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImgBook(e.target.files[0]);
    }
  };

  const handleSubmitCreateUsers = async () => {
    if (!title) {
      toast.error("Ivalid title");
      return;
    }
    if (!img_book) {
      toast.error("Invalid Img Book");
    }
    if (!price) {
      toast.error("Invalid price");
    }
    if (!quantity) {
      toast.error("Invalid quantity");
    }
    if (!salse) {
      toast.error("Invalid salse");
    }

    // let data = await createUser(
    //   email,
    //   password,
    //   username,
    //   address,
    //   phone,
    //   role,
    //   image
    // );

    // console.log("check data: ", data);

    // if (data && data.errcode === 0) {
    //   toast.success(data.message);
    //   handleClose();
    //   await fetchListUser();
    // }
    // if (data && data.errcode !== 0) {
    //   toast.error(data.message);
    // }

    // console.log("check res: ", res.data);
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
          <Modal.Title>Craete New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input
                type="email"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">AuthorId</label>
              <input
                type="password"
                className="form-control"
                value={authorId}
                onChange={(e) => setAuthordId(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">GenresId</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={genresId}
                onChange={(e) => setGenresId(e.target.value)}
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
            <div className="col-md-6">
              <label className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Salse</label>
              <input
                type="text"
                className="form-control"
                value={salse}
                onChange={(e) => setSalse(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(e) => handleUploadImage(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} alt="img" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateBook;
