import apiGenresService from "../service/apiGenresService";
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
  const { genresName, description } = req.body;
  console.log(genresName, description);
  try {
    if (!genresName) {
      return res.status(200).json({
        message: "Input Genres Name The Requied",
        errcode: 1,
      });
    }
    const dataGenres = await apiGenresService.createGenres(
      genresName,
      description
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
  const { genresName, description } = req.body;
  const genresId = req.params.id;
  console.log("id: ", genresId);

  try {
    const updateGenres = await apiGenresService.updateGenres(
      genresName,
      description,
      genresId
    );

    if (updateGenres) {
      return res.status(200).json({
        message: "Update Genres Is The Success ",
        errcode: 0,
        data: updateGenres,
      });
    } else {
      return res.status(200).json({
        message: "Update Genres Is The Failed ",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Update Genres Is The Error ",
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

module.exports = {
  getAllGenres,
  getGenresById,
  getGenresById,
  createGenres,
  UpdateGenres,
  deleteGenres,
};
