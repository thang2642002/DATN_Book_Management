import apiAuthorService from "../service/apiAuthorService";

const getAllAuthors = async (req, res) => {
  try {
    const listAuthor = await apiAuthorService.getAllAuthor();
    if (listAuthor) {
      return res.status(200).json({
        message: "Show list author is the success",
        data: listAuthor,
      });
    } else {
      return res.status(200).json({
        message: "Show list author is the faild",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show list author is the error",
    });
  }
};

const getAllAuthorById = async (req, res) => {
  const id = req.params.id;

  try {
    const getAuthorById = await apiAuthorService.getAuthorById(id);
    if (getAuthorById) {
      return res.status(200).json({
        message: "Get author by id is the success",
        data: getAuthorById,
      });
    } else {
      return res.status(200).json({
        message: "Get author by id is the faild",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Get author by id is the error",
    });
  }
};

const createAuthor = async (req, res) => {
  const { author_name, address, phone, bio } = req.body;
  console.log(author_name, address, phone, bio);
  try {
    if (!author_name || !address || !phone || !bio) {
      return res.status(200).json({
        message: "Input is the requied",
      });
    }
    let createNewAuthor = await apiAuthorService.createAuthor(
      author_name,
      address,
      phone,
      bio
    );
    if (createNewAuthor) {
      return res.status(200).json({
        message: "Create author is the success",
        data: createNewAuthor,
      });
    } else {
      return res.status(200).json({
        message: "Input is the faild",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Create author is the error",
      data: [],
    });
  }
};

const deleteAuthor = async (req, res) => {
  const authorId = req.params.id;
  if (!authorId) {
    return res.status(400).json({ message: "Author ID is required" });
  }

  try {
    const result = await apiAuthorService.deleteAuthor(authorId);
    console.log(`Service result: `, result);
    if (result) {
      return res
        .status(200)
        .json({ message: "Author deleted successfully", data: result });
    } else {
      return res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    console.error("Error deleting Product:", error);
    return res.status(500).json({ message: "Delete Author Failed" });
  }
};

const updateAuthor = async (req, res) => {
  const id = req.params.id;
  const authorUpdate = req.body;

  console.log("id: ", id);
  try {
    let updateAuthor = await apiAuthorService.updateAuthor(id, authorUpdate);
    console.log("updateAuthor: ", updateAuthor);
    if (updateAuthor) {
      res.status(200).json({
        message: "Upadate Author is the success",
        data: updateAuthor,
      });
    } else {
      res.status(200).json({
        message: "Upadate Author is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Upadate Author is the faild",
      data: [],
    });
  }
};

module.exports = {
  getAllAuthors,
  getAllAuthorById,
  createAuthor,
  deleteAuthor,
  updateAuthor,
};
