import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
  const [title, setTitle] = useState("");
  const [img_book, setImgBook] = useState("");
  const [authorId, setAuthordId] = useState(0);
  const [genresId, setGenresId] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [salse, setSalse] = useState(0);
  const [supplierId, setSuppliersId] = useState(0);
  const [description, setDescription] = useState("");
  const [nameAuthor, setNameAuthor] = useState("");
  const [nameGenres, setNameGenres] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [listGenres, setListGenres] = useState([]);
  const [lisAuthor, setListAuthor] = useState([]);
  const [listSuppliers, setListSuppliers] = useState([]);

  const fechAllGenres = async () => {
    let data = await getListGenres();
    setListGenres(data.data);
  };

  const fetchAllAuthor = async () => {
    let data = await getListAuthor();
    setListAuthor(data.data);
  };

  const fetchAllSuppliers = async () => {
    let data = await getListPubliers();
    setListSuppliers(data.data);
  };

  useEffect(() => {
    fechAllGenres();
    fetchAllAuthor();
    fetchAllSuppliers();
  }, []);

  useEffect(() => {
    console.log("dataUpdate", dataUpdate);
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
      // setNameAuthor(dataUpdate.Author.author_name);
      // setNameGenres(dataUpdate.Genre.genres_name);
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

    if (!price) {
      toast.error("Invalid price");
    }

    if (!quantity) {
      toast.error("Invalid quantity");
    }
    if (!salse) {
      toast.error("Invalid salse");
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
            <div className="col-6">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
                {lisAuthor.map((author, index) => {
                  return (
                    <option value={author.id} key={`author ${index}`}>
                      {author.author_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <label className="form-label">GenresId</label>
              <select
                className="form-select"
                value={genresId}
                onChange={(e) => setGenresId(e.target.value)}
              >
                {listGenres.map((genres, index) => {
                  return (
                    <option value={genres.id} key={index + 1}>
                      {genres.genres_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <label className="form-label">Supplier</label>
              <select
                className="form-select"
                value={supplierId}
                onChange={(e) => setSuppliersId(e.target.value)}
              >
                {listSuppliers.map((supplier, index) => {
                  console.log("supplier", supplier.id);
                  return (
                    <option value={supplier.id} key={index + 1}>
                      {supplier.suppliers_name}
                    </option>
                  );
                })}
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
                <textarea
                  className="p-2"
                  rows={6}
                  cols="145"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Nhập mổ tả vào đây..."
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateBook;
