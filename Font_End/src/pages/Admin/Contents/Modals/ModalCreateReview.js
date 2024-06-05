import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createReview } from "../../../../services/reviewService";
// import "./ModalCreateReview.scss";

const ModalCreateReview = (props) => {
  const { show, setShow, fetchListReview } = props;
  const handleClose = () => {
    setShow(false);
    setBookId("");
    setUserId("");
    setRating("");
    setComment("");
    setReviewDate("");
  };
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [reviewDate, setReviewDate] = useState(Date);

  const handleSubmitCreateReview = async () => {
    if (!bookId) {
      toast.error("Ivalid Book ID");
      return;
    }
    if (!userId) {
      toast.error("Ivalid User ID");
      return;
    }

    if (!rating) {
      toast.error("Ivalid Rating");
      return;
    }

    if (!comment) {
      toast.error("Ivalid Comment");
      return;
    }

    if (!reviewDate) {
      toast.error("Ivalid Review Date");
      return;
    }

    let data = await createReview(bookId, userId, rating, comment, reviewDate);

    console.log("check data: ", data);

    if (data && data.errcode === 0) {
      toast.success(data.message);
      handleClose();
      await fetchListReview();
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
          <Modal.Title>Craete New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Book ID</label>
              <input
                type="text"
                className="form-control"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Rating</label>
              <input
                type="text"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Comment</label>
              <input
                type="text"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Review Date</label>
              <input
                type="text"
                className="form-control"
                value={reviewDate}
                onChange={(e) => setReviewDate(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateReview()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateReview;
