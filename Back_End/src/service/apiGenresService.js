import db from "../models/index";

const getAllGenres = async () => {
  try {
    let getListGenres = await db.Genres.findAll({ include: db.Books });
    return getListGenres;
  } catch (error) {
    console.log(error);
  }
};

const getGenresById = async (id) => {
  try {
    let genresById = await db.Genres.findOne({
      where: {
        id: id,
      },
      include: db.Books,
    });
    return genresById;
  } catch (error) {
    console.log(error);
  }
};

const createGenres = async (genresName, description) => {
  try {
    let checkGenresName = await db.Genres.findOne({
      where: {
        genres_name: genresName,
      },
    });

    if (!checkGenresName) {
      let createGenresNew = await db.Genres.create({
        genres_name: genresName,
        description: description,
      });
      return createGenresNew;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateGenres = async (genresName, description, genresId) => {
  try {
    let getGenres = await db.Genres.findOne({
      where: { id: genresId },
    });

    console.log("check get", getGenres);

    if (!getGenres) {
      return null;
    }

    await getGenres.update({
      genres_name: genresName,
      description: description,
    });

    console.log("check get 2: ", getGenres);
    return getGenres;
  } catch (error) {
    console.log(error);
  }
};

const deleteGenres = async (id) => {
  try {
    let deleteGenres = await db.Genres.destroy({
      where: {
        id: id,
      },
    });
    return deleteGenres;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createGenres,
  getGenresById,
  getAllGenres,
  updateGenres,
  deleteGenres,
};
