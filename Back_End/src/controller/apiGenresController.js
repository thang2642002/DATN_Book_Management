import apiGenresService from "../service/apiGenresService";
const getAllGenres = async (req, res) => {
  try {
    let getListGenres = await apiGenresService.getAllGenres();
    if (getListGenres) {
      return res.status(200).json({
        message: "Show List Genres The Success",
        data: getListGenres,
      });
    } else {
      return res.status(200).json({
        message: "Show List Genres The Failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
        data: getGenresById,
      });
    } else {
      return res.status(200).json({
        message: "Show Genres The Id Failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show Genres The Id Error",
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
      });
    }
    const dataGenres = await apiGenresService.createGenres(
      genresName,
      description
    );
    if (dataGenres) {
      return res.status(200).json({
        message: "Create Genres The Success ",
        data: dataGenres,
      });
    } else {
      return res.status(200).json({
        message: "Create Genres The Failed ",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create Genres The Error",
    });
  }
};

const UpdateGenres = async (req, res) => {
  const { genresName, description } = req.body;
  const genresId = req.params.id;
  try {
    const updateGenres = await apiGenresService.updateGenres(
      genresName,
      description,
      genresId
    );

    if (updateGenres) {
      return res.status(200).json({
        message: "Update Genres Is The Success ",
        data: updateGenres,
      });
    } else {
      return res.status(200).json({
        message: "Update Genres Is The Failed ",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Update Genres Is The Error ",
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
        data: deleteGenres,
      });
    } else {
      return res.status(204).json({
        message: "No Genres Found to Delete",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error Deleting Genres",
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
