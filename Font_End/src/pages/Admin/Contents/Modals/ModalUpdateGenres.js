import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateGenres } from "../../../../services/genresService";
import _ from "lodash";
import "./ModalCreateUser.scss";
import { FcPlus } from "react-icons/fc";

const ModalUpdateGenres = (props) => {
  const { show, setShow, dataUpdate, fetchListGenres } = props;
  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setImg_Genres("");
    setPreviewImage("");
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img_genres, setImg_Genres] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.genres_name);
      setDescription(dataUpdate.description);
      setImg_Genres(dataUpdate.img_genres);
      setPreviewImage(dataUpdate.img_genres);
    }
  }, [dataUpdate]);

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImg_Genres(e.target.files[0]);
    }
  };

  const handleSubmitUpdateGenres = async () => {
    if (!name) {
      toast.error("Invalid name");
    }

    if (!description) {
      toast.error("Invalid description");
    }

    let data = await updateGenres(name, description, dataUpdate.id, img_genres);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListGenres();
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
          <Modal.Title>Update A Genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label"> Name Genres</label>
              <input
                type="email"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
          <Button variant="primary" onClick={() => handleSubmitUpdateGenres()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateGenres;
