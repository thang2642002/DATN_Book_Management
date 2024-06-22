import db from "../models/index";

const fetchPaginatedGenres = async (page, pageSize) => {
  try {
    const totalGenres = await db.Genres.count();
    const listGenres = await db.Genres.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });
    const totalPages = Math.ceil(totalGenres / pageSize);
    return {
      totalItems: totalGenres,
      totalPages: totalPages,
      data: listGenres,
    };
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    throw error;
  }
};

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

const createGenres = async (genresName, description, img_genres) => {
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
        img_genres: img_genres,
      });
      return createGenresNew;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateGenres = async (genresName, description, genresId, img_genres) => {
  try {
    let getGenres = await db.Genres.findOne({
      where: { id: genresId },
    });

    if (!getGenres) {
      return null;
    }

    await getGenres.update({
      genres_name: genresName,
      description: description,
      img_genres: img_genres,
    });

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

const getNameGenres = async (nameGenres) => {
  try {
    if (!nameGenres) {
      return null;
    }
    const data = await db.Genres.findAll({
      where: {
        genres_name: nameGenres,
      },
    });

    if (!data) {
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchPaginatedGenres,
  createGenres,
  getGenresById,
  getAllGenres,
  updateGenres,
  deleteGenres,
  getNameGenres,
};
