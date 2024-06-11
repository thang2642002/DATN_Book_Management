import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateReview } from "../../../../services/reviewService";
import _ from "lodash";
import "./ModalCreateUser.scss";

const ModalUpdateReview = (props) => {
  const { show, setShow, fetchListReview, dataUpdate } = props;
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
  const [reviewDate, setReviewDate] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setBookId(dataUpdate.bookId);
      setUserId(dataUpdate.userId);
      setRating(dataUpdate.rating);
      setComment(dataUpdate.comment);
      setReviewDate(dataUpdate.reviewDate);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUsers = async () => {
    if (!bookId) {
      toast.error("Invalid Book ID");
    }
    if (!userId) {
      toast.error("Invalid User ID");
    }
    if (!rating) {
      toast.error("Invalid Rating");
    }

    if (!comment) {
      toast.error("Invalid Comment");
    }

    if (!reviewDate) {
      toast.error("Invalid Review Date");
    }

    let data = await updateReview(dataUpdate.id, {
      bookId,
      userId,
      rating,
      comment,
      reviewDate,
    });
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
          <Modal.Title>Update A Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Book ID</label>
              <input
                type="text"
                className="form-control"
                value={bookId}
                disabled
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                value={userId}
                disabled
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Rating</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Comment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Review Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUsers()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateReview;
