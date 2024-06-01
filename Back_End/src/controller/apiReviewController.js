import apiReviewService from "../service/apiReviewService";

const getAllReviews = async (req, res) => {
  try {
    const reviews = await apiReviewService.getAllReviews();
    if (reviews) {
      return res.status(200).json({
        message: "Retrieve all reviews successfully",
        data: reviews,
      });
    } else {
      return res.status(404).json({
        message: "No reviews found",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving reviews",
      data: [],
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
        data: review,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error retrieving review:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving review",
      data: null,
    });
  }
};

const createReview = async (req, res) => {
  const { bookId, userId, rating, comment, reviewDate } = req.body;

  try {
    if (!bookId || !userId || !rating || !comment || !reviewDate) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newReview = await apiReviewService.createReview({
      bookId,
      userId,
      rating,
      comment,
      reviewDate,
    });

    if (newReview) {
      return res.status(201).json({
        message: "Review created successfully",
        data: newReview,
      });
    } else {
      return res.status(500).json({
        message: "Failed to create review",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error creating review:", error);
    return res.status(500).json({
      message: "An error occurred while creating review",
      data: null,
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
        data: updatedReview,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error updating review:", error);
    return res.status(500).json({
      message: "An error occurred while updating review",
      data: null,
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
        data: deleted,
      });
    } else {
      return res.status(404).json({
        message: "Review not found",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error deleting review:", error);
    return res.status(500).json({
      message: "An error occurred while deleting review",
      data: null,
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
