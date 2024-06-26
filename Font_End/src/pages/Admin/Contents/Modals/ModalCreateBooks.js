import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { createBook } from "../../../../services/BookService";
import { getListGenres } from "../../../../services/genresService";
import { getListAuthor } from "../../../../services/authorService";
import { getListPubliers } from "../../../../services/publiersService";
// import "./ModalCreateBook.scss";

const ModalCreateBook = (props) => {
  const { show, setShow, fetchListBooks } = props;
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setImgBook("");
    setAuthorId("");
    setGenresId("");
    setPrice("");
    setQuantity("");
    setSalse("");
    setPreviewImage("");
  };
  const [title, setTitle] = useState("");
  const [img_book, setImgBook] = useState("");
  const [authorId, setAuthorId] = useState(1);
  const [genresId, setGenresId] = useState(1);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [salse, setSalse] = useState("");
  const [supplierId, setSuppliersId] = useState(1);
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const [nameGenres, setNameGenres] = useState([]);
  const [nameAuthor, setNameAuthor] = useState([]);
  const [nameSuppliers, setNameSupliers] = useState([]);
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImgBook(e.target.files[0]);
    }
  };

  const getAllAuthor = async () => {
    const dataAuthor = await getListAuthor();
    setNameAuthor(dataAuthor?.data);
  };

  const getAllGenres = async () => {
    const dataGenres = await getListGenres();
    setNameGenres(dataGenres.data);
  };

  const getAllSuppliers = async () => {
    const dataSuppliers = await getListPubliers();
    setNameSupliers(dataSuppliers.data);
  };

  useEffect(() => {
    getAllGenres();
    getAllAuthor();
    getAllSuppliers();
  }, []);

  const handleSubmitCreateUsers = async () => {
    if (!title) {
      toast.error("Invalid title");
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
    if (!supplierId) {
      toast.error("Invalid supplierId");
    }

    let data = await createBook(
      title,
      img_book,
      authorId,
      genresId,
      price,
      quantity,
      salse,
      supplierId,
      description
    );

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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="xl"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Book</Modal.Title>
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
            <div className="col-6">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">AuthorId</label>
              <select
                className="form-select"
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
              >
                {nameAuthor.map((author, index) => (
                  <option value={author.id} key={index}>
                    {author.author_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <label className="form-label">GenresId</label>
              <select
                className="form-select"
                value={genresId}
                onChange={(e) => setGenresId(e.target.value)}
              >
                {nameGenres &&
                  nameGenres.map((genresname, index) => (
                    <option value={genresname.id} key={index + 1}>
                      {genresname.genres_name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-4">
              <label className="form-label">SupplierId</label>
              <select
                className="form-select"
                value={supplierId}
                onChange={(e) => setSuppliersId(e.target.value)}
              >
                {nameSuppliers &&
                  nameSuppliers.map((suppliersname, index) => (
                    <option value={suppliersname.id} key={index + 1}>
                      {suppliersname.suppliers_name}
                    </option>
                  ))}
              </select>
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
              <label className="form-label">Salse</label>
              <input
                type="text"
                className="form-control"
                value={salse}
                onChange={(e) => setSalse(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Comment</label>
              <div>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={(value) => setDescription(value)}
                />
              </div>
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
          <Button variant="primary" onClick={handleSubmitCreateUsers}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateBook;
