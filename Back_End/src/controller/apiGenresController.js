import apiGenresService from "../service/apiGenresService";

const getPaginatedGenres = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  try {
    const { totalItems, totalPages, data } =
      await apiGenresService.fetchPaginatedGenres(page, pageSize);
    res.status(200).json({
      message: "PaginatedGenres success",
      errcode: 0,
      data: data,
      totalItems: totalItems,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "PaginatedGenres error",
      errcode: -1,
    });
  }
};

const getAllGenres = async (req, res) => {
  try {
    let getListGenres = await apiGenresService.getAllGenres();
    if (getListGenres) {
      return res.status(200).json({
        message: "Show List Genres The Success",
        errcode: 0,
        data: getListGenres,
      });
    } else {
      return res.status(200).json({
        message: "Show List Genres The Failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errcode: 1,
      message: "Show List Genres The Error",
    });
  }
};

const getGenresById = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    let getGenresById = await apiGenresService.getGenresById(id);
    if (getGenresById) {
      return res.status(200).json({
        message: "Show Genres The Id Succsess",
        errcode: 0,
        data: getGenresById,
      });
    } else {
      return res.status(200).json({
        message: "Show Genres The Id Failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show Genres The Id Error",
      errcode: 1,
    });
  }
};

const createGenres = async (req, res) => {
  const img_genres = req.file;
  const { genresName, description } = req.body;
  console.log(genresName, description, img_genres);
  try {
    if (!genresName || !img_genres) {
      return res.status(200).json({
        message: "Input Genres Name The Requied",
        errcode: 1,
      });
    }
    const dataGenres = await apiGenresService.createGenres(
      genresName,
      description,
      img_genres ? img_genres.path : undefined
    );
    if (dataGenres) {
      return res.status(200).json({
        message: "Create Genres The Success ",
        errcode: 0,
        data: dataGenres,
      });
    } else {
      return res.status(200).json({
        message: "Create Genres The Failed ",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create Genres The Error",
      errcode: -1,
    });
  }
};

const UpdateGenres = async (req, res) => {
  const img_genres = req.file;
  const { genresName, description } = req.body;
  const genresId = req.params.id;
  try {
    let updatedImgGenres = null;
    if (img_genres) {
      updatedImgGenres = img_genres.path;
    }
    const updateGenresResult = await apiGenresService.updateGenres(
      genresName,
      description,
      genresId,
      updatedImgGenres
    );

    if (updateGenresResult) {
      return res.status(200).json({
        message: "Update Genres Successful",
        errcode: 0,
        data: updateGenresResult,
      });
    } else {
      return res.status(200).json({
        message: "Update Genres Failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error("Error updating genres:", error);
    return res.status(500).json({
      message: "Update Genres Error",
      errcode: -1,
    });
  }
};
const deleteGenres = async (req, res) => {
  const id = req.params.id;
  try {
    let deleteGenres = await apiGenresService.deleteGenres(id);
    if (deleteGenres) {
      return res.status(200).json({
        message: "Delete Genres Success",
        errcode: 0,
        data: deleteGenres,
      });
    } else {
      return res.status(204).json({
        message: "No Genres Found to Delete",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Deleting Genres",
      errcode: -1,
      error: error.message,
    });
  }
};

const getNameGenres = async (req, res) => {
  let nameGenres = req.query.nameGenres;
  console.log("namegenres", nameGenres);

  try {
    if (!nameGenres) {
      return res.status(404).json({
        message: "Get All Name Genres is the faild",
        errcode: 1,
      });
    }
    const data = await apiGenresService.getNameGenres(nameGenres);
    if (data) {
      return res.status(200).json({
        message: "Get All Name Genres is the sucesss",
        errcode: 0,
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Get All Name Genres is the faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Get All Name Genres is the error",
      errcode: -1,
    });
  }
};
module.exports = {
  getPaginatedGenres,
  getAllGenres,
  getGenresById,
  getNameGenres,
  createGenres,
  UpdateGenres,
  deleteGenres,
};
