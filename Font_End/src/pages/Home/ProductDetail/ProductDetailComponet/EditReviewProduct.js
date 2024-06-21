import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateReview } from "../../../../services/reviewService";

const EditReviewProduct = (props) => {
  const { show, setShow, dataUpdateReview } = props;
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(dataUpdateReview.comment);
  }, [dataUpdateReview]);

  const handleUpdateReview = async () => {
    try {
      const dataUpdate = { comment: comment };
      const dataReviewUpdate = await updateReview(
        dataUpdateReview.id,
        dataUpdate
      );
      console.log("dataUpdateReview", dataReviewUpdate);
      if (dataReviewUpdate && dataReviewUpdate.errcode === 0) {
        toast.success(dataReviewUpdate.message);
        handleClose();
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      }
      if (dataReviewUpdate && dataReviewUpdate.errcode !== 0) {
        toast.error(dataReviewUpdate.message);
      }
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa bình luận của bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="pb-2">Nhập bình luận:</label>
          <textarea
            className="p-2"
            rows="4"
            cols="58"
            placeholder="Nhập bình luận của bạn ở đây..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateReview}>
            Thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditReviewProduct;
