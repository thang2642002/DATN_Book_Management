import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { updateBook } from "../../../../services/BookService";
import { getListGenres } from "../../../../services/genresService";
import { getListAuthor } from "../../../../services/authorService";
import { getListPubliers } from "../../../../services/publiersService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateBook = (props) => {
  const { show, setShow, fetchListBooks, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const [title, setTitle] = useState("");
  const [img_book, setImgBook] = useState("");
  const [authorId, setAuthordId] = useState(0);
  const [genresId, setGenresId] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [salse, setSalse] = useState(0);
  const [supplierId, setSuppliersId] = useState(0);
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [listGenres, setListGenres] = useState([]);
  const [listAuthor, setListAuthor] = useState([]);
  const [listSuppliers, setListSuppliers] = useState([]);

  const resetForm = () => {
    setTitle("");
    setImgBook("");
    setAuthordId(0);
    setGenresId(0);
    setPrice(0);
    setQuantity(0);
    setSalse(0);
    setDescription("");
    setPreviewImage("");
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleQuillChange = (content, delta, source, editor) => {
    setDescription(content);
  };

  const fetchAllGenres = async () => {
    let data = await getListGenres();
    setListGenres(data.data);
  };

  const fetchAllAuthors = async () => {
    let data = await getListAuthor();
    setListAuthor(data.data);
  };

  const fetchAllSuppliers = async () => {
    let data = await getListPubliers();
    setListSuppliers(data.data);
  };

  useEffect(() => {
    fetchAllGenres();
    fetchAllAuthors();
    fetchAllSuppliers();
  }, []);

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setTitle(dataUpdate?.title);
      setImgBook(dataUpdate?.img_book);
      setAuthordId(dataUpdate?.Author?.id);
      setGenresId(dataUpdate?.Genre?.id);
      setPrice(dataUpdate?.price);
      setQuantity(dataUpdate?.quantity);
      setSalse(dataUpdate?.sales);
      setSuppliersId(dataUpdate?.Supplier?.supplierId);
      setPreviewImage(dataUpdate?.img_book);
      setDescription(dataUpdate?.description);
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
      return;
    }

    if (!price) {
      toast.error("Invalid price");
      return;
    }

    if (!quantity) {
      toast.error("Invalid quantity");
      return;
    }

    if (!salse) {
      toast.error("Invalid sales");
      return;
    }

    let data = await updateBook(
      dataUpdate.id,
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
    } else {
      toast.error(data.message);
    }
  };

  return (
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
              onChange={(e) => setAuthordId(e.target.value)}
            >
              {listAuthor.map((author, index) => (
                <option value={author.id} key={`author-${index}`}>
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
              {listGenres.map((genre, index) => (
                <option value={genre.id} key={`genre-${index}`}>
                  {genre.genres_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label className="form-label">Supplier</label>
            <select
              className="form-select"
              value={supplierId}
              onChange={(e) => setSuppliersId(e.target.value)}
            >
              {listSuppliers.map((supplier, index) => (
                <option value={supplier.id} key={`supplier-${index}`}>
                  {supplier.suppliers_name}
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
            <label className="form-label">Sales</label>
            <input
              type="text"
              className="form-control"
              value={salse}
              onChange={(e) => setSalse(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Comment</label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleQuillChange}
              modules={modules}
              formats={formats}
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
              onChange={handleUploadImage}
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
        <Button variant="primary" onClick={handleSubmitUpdateUsers}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdateBook;
