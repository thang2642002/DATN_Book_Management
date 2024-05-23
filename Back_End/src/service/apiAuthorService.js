import db from "../models/index";

const getAllAuthor = async () => {
  try {
    let author = await db.Author.findAll({ include: db.Books });
    if (!author) {
      return null;
    }
    return author;
  } catch (error) {
    console.log(error);
  }
};

const getAuthorById = async (id) => {
  try {
    const author = await db.Author.findOne({
      where: {
        id: id,
        include: db.Books,
      },
    });
    if (!author) {
      return null;
    }
    return author;
  } catch (error) {
    console.log(error);
  }
};

const createAuthor = async (author_name, address, phone, bio) => {
  try {
    let createAuthor = await db.Author.create({
      author_name,
      address,
      phone,
      bio,
    });
    if (!createAuthor) {
      return null;
    }
    return createAuthor;
  } catch (error) {
    console.log(error);
  }
};

const updateAuthor = async (id, authorUpdate) => {
  try {
    let author = await db.Author.findByPk(id);
    console.log("check id author: ", author);
    if (!author) {
      return null;
    }

    await author.update(authorUpdate);
    return author;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update author");
  }
};

const deleteAuthor = async (authorId) => {
  try {
    const author = await db.Author.findByPk(authorId);
    if (!author) {
      return false;
    }
    await author.destroy();
    return author;
  } catch (error) {
    console.error("Error deleting Author:", error);
    throw new Error("Delete Author Failed");
  }
};

module.exports = {
  getAllAuthor,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
