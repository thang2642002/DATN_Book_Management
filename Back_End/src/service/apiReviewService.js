import db from "../models";

const getAllReviews = async () => {
  try {
    const reviews = await db.Review.findAll({
      include: [
        { model: db.Books, attributes: ["title"] },
        { model: db.User, attributes: ["username", "avatar"] },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Error fetching reviews");
  }
};

const getReviewById = async (id) => {
  try {
    const review = await db.Review.findOne({
      where: { id },
      include: [
        { model: db.Books, attributes: ["title"] },
        { model: db.User, attributes: ["username"] },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return review;
  } catch (error) {
    console.error("Error fetching review:", error);
    throw new Error("Error fetching review");
  }
};

const createReview = async ({ bookId, userId, rating, comment }) => {
  try {
    const reviewDate = new Date().toISOString();
    const newReview = await db.Review.create({
      bookId: bookId,
      userId: userId,
      rating: rating,
      comment: comment,
      reviewDate: reviewDate,
    });
    console.log("newReview", newReview);
    return newReview;
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Error creating review");
  }
};

const updateReview = async (id, dataUpdate) => {
  try {
    const review = await db.Review.findByPk(id);
    if (!review) {
      return null;
    }

    await review.update(dataUpdate);
    return review;
  } catch (error) {
    console.error("Error updating review:", error);
    throw new Error("Error updating review");
  }
};

const deleteReview = async (id) => {
  try {
    const review = await db.Review.findByPk(id);
    if (!review) {
      return null;
    }

    await review.destroy();
    return review;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Error deleting review");
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
