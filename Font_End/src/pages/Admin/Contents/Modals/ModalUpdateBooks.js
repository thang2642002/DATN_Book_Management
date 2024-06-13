import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { updateBook } from "../../../../services/BookService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateBook = (props) => {
  const { show, setShow, fetchListBooks, dataUpdate } = props;
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setImgBook("");
    setAuthordId(0);
    setGenresId(0);
    setPrice(0);
    setQuantity(0);
    setSalse(0);
    setPreviewImage("");
  };
  const [title, setTitle] = useState("");
  const [img_book, setImgBook] = useState("");
  const [authorId, setAuthordId] = useState(0);
  const [genresId, setGenresId] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [salse, setSalse] = useState(0);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setTitle(dataUpdate.title);
      setImgBook(dataUpdate.img_book);
      setAuthordId(dataUpdate.Author.author_name);
      setGenresId(dataUpdate.Genre.genres_name);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setSalse(dataUpdate.sales);
      console.log("dataUpdate", dataUpdate);
    }
  }, [dataUpdate]);

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImgBook(e.target.files[0]);
    }
  };

  const handleSubmitUpdateUsers = async () => {
    if (!title) {
      toast.error("Invalid title");
    }
    if (!img_book) {
      toast.error("Invalid address");
    }
    if (!price) {
      toast.error("Invalid img_book");
    }

    if (!quantity) {
      toast.error("Invalid quantity");
    }
    if (!salse) {
      toast.error("Invalid salse");
    }

    let data = await updateBook();
    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await updateBook(dataUpdate.id, {
        title,
        img_book,
        authorId,
        genresId,
        price,
        quantity,
        salse,
      });
    }
    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListBooks();
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
          <Modal.Title>Update A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">AuthorId</label>
              <input
                type="text"
                className="form-control"
                value={authorId}
                disabled
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateBook;
