import apiReviewService from "../service/apiReviewService";

const getAllReviews = async (req, res) => {
  try {
    const reviews = await apiReviewService.getAllReviews();
    if (reviews) {
      return res.status(200).json({
        message: "Retrieve all reviews successfully",
        errcode: 0,
        data: reviews,
      });
    } else {
      return res.status(404).json({
        message: "No reviews found",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving reviews",
      errcode: -1,
    });
  }
};

const getReviewById = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await apiReviewService.getReviewById(id);
    if (review) {
      return res.status(200).json({
        message: "Retrieve review successfully",
        errcode: 0,
        data: review,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        errcode: 1,
        data: null,
      });
    }
  } catch (error) {
    console.error("Error retrieving review:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving review",
      errcode: -1,
    });
  }
};

const createReview = async (req, res) => {
  const { bookId, userId, rating, comment } = req.body;
  console.log("bookId", bookId);
  console.log("userId", userId);
  console.log("comment", comment);

  try {
    if (!bookId || !userId || !comment) {
      return res.status(400).json({
        message: "All fields are required",
        errcode: 1,
      });
    }

    const newReview = await apiReviewService.createReview({
      bookId,
      userId,
      rating,
      comment,
    });

    if (newReview) {
      return res.status(201).json({
        message: "Review created successfully",
        errcode: 0,
        data: newReview,
      });
    } else {
      return res.status(500).json({
        message: "Failed to create review",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error("Error creating review:", error);
    return res.status(500).json({
      message: "An error occurred while creating review",
      errcode: -1,
    });
  }
};

const updateReview = async (req, res) => {
  const { id } = req.params;
  const dataUpdate = req.body;

  try {
    const updatedReview = await apiReviewService.updateReview(id, dataUpdate);
    if (updatedReview) {
      return res.status(200).json({
        message: "Review updated successfully",
        errcode: 0,
        data: updatedReview,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        errcode: 1,
        data: null,
      });
    }
  } catch (error) {
    console.error("Error updating review:", error);
    return res.status(500).json({
      message: "An error occurred while updating review",
      errcode: -1,
    });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await apiReviewService.deleteReview(id);
    if (deleted) {
      return res.status(200).json({
        message: "Review deleted successfully",
        errcode: 0,
        data: deleted,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        errcode: 1,
        data: null,
      });
    }
  } catch (error) {
    console.error("Error deleting review:", error);
    return res.status(500).json({
      message: "An error occurred while deleting review",
      errcode: -1,
    });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
