import db from "../models/index";
const { Op } = require("sequelize");
const TfIdf = require("node-tfidf");

const fetchPaginatedProduct = async (page, pageSize, genresId) => {
  try {
    const totalProducts = await db.Books.count();
    let listProducts;
    if (genresId !== 0) {
      listProducts = await db.Books.findAll({
        where: {
          genresId: genresId,
        },
        include: [
          {
            model: db.Genres,
          },
          {
            model: db.Author,
          },
          { model: db.Suppliers },
        ],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
    } else {
      listProducts = await db.Books.findAll({
        include: [
          {
            model: db.Genres,
          },
          {
            model: db.Author,
          },
          { model: db.Suppliers },
        ],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
    }
    const totalPages = Math.ceil(totalProducts / pageSize);
    return {
      totalItems: totalProducts,
      totalPages: totalPages,
      data: listProducts,
    };
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    throw error;
  }
};

const findNameProduct = async (productName) => {
  try {
    const dataNameProduct = await db.Books.findAll({
      where: {
        title: {
          [Op.like]: `%${productName}%`,
        },
      },
    });

    console.log("dataNameProduct11111", dataNameProduct);

    if (!dataNameProduct) {
      return null;
    }
    return dataNameProduct;
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async () => {
  try {
    const listProduct = await db.Books.findAll({
      include: [
        {
          model: db.Genres,
        },
        {
          model: db.Author,
        },
        { model: db.Suppliers },
      ],
    });
    if (!listProduct) {
      return null;
    }
    return listProduct;
  } catch (error) {
    console.log(error);
  }
};

const getAllProductById = async (id) => {
  try {
    let productById = await db.Books.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: db.Genres,
        },
        {
          model: db.Author,
        },
        { model: db.Suppliers },
      ],
    });
    if (!productById) {
      return null;
    }
    return productById;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (
  title,
  img_book,
  authorId,
  genresId,
  price,
  quantity,
  sales,
  supplierId,
  description
) => {
  try {
    const genres = await db.Genres.findByPk(genresId);
    if (!genres) {
      throw new Error(`Genres with ID ${genresId} not found`);
    }

    let dataProduct = await db.Books.create({
      title,
      img_book,
      authorId,
      genresId,
      price,
      quantity,
      sales,
      supplierId,
      description,
    });

    return dataProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

const updateProduct = async (id, dataUpdate) => {
  try {
    const product = await db.Books.findByPk(id);
    if (!product) {
      return null;
    }

    await product.update(dataUpdate);

    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product");
  }
};

const removeProduct = async (productId) => {
  try {
    const product = await db.Books.findByPk(productId);
    if (!product) {
      return false;
    }
    await product.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Delete Product Failed");
  }
};

const recommendByGenren = async (bookId) => {
  try {
    const originalBook = await db.Books.findByPk(bookId, {
      include: [
        {
          model: db.Genres,
          attributes: ["genres_name"],
        },
        {
          model: db.Author,
          attributes: ["author_name"],
        },
      ],
    });

    if (!originalBook) {
      throw new Error(`Không tìm thấy cuốn sách với ID ${bookId}`);
    }

    const recommendedBooks = await db.Books.findAll({
      where: {
        genresId: originalBook.genresId,
        id: { [Op.ne]: bookId },
      },
      include: [
        { model: db.Author, attributes: ["author_name"] },
        { model: db.Genres, attributes: ["genres_name"] },
      ],
      limit: 10,
    });

    return recommendedBooks;
  } catch (error) {
    console.error("Lỗi khi đề xuất sách theo thể loại:", error);
    throw new Error("Không thể đề xuất sách theo thể loại.");
  }
};

const getByPriceProduct = async (minPrice, maxPrice) => {
  try {
    let whereCondition = {};
    if (minPrice && maxPrice) {
      whereCondition = {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      };
    } else if (minPrice) {
      whereCondition = {
        price: {
          [Op.gte]: minPrice,
        },
      };
    } else if (maxPrice) {
      whereCondition = {
        price: {
          [Op.lte]: maxPrice,
        },
      };
    }

    const dataPrice = await db.Books.findAll({
      where: whereCondition,
      order: [["price", "ASC"]],
    });

    console.log("dataPrice", dataPrice);

    if (!dataPrice || dataPrice.length === 0) {
      return null;
    }
    return dataPrice;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// function preprocessText(text) {
//   return text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// }

// function cosineSimilarity(vecA, vecB) {
//   const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
//   const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
//   const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
//   return dotProduct / (magnitudeA * magnitudeB);
// }

// const recommendProducts = async (productId) => {
//   try {

//     const products = await db.Books.findAll();
//     const tfidf = new TfIdf();

//     products.forEach((product) => {
//       const processedDescription = preprocessText(product.description);

//       tfidf.addDocument(processedDescription);
//     });

//     const productIndex = products.findIndex((p) => p.id === productId);
//     if (productIndex === -1) {
//       throw new Error(`Product with ID ${productId} not found`);
//     }
//     const targetVector = tfidf
//       .listTerms(productIndex)
//       .map((term) => term.tfidf);

//     console.log(`Target Vector for product ID ${productId}:`, targetVector);

//     const sumOfSquares = targetVector.reduce((acc, val) => acc + val ** 2, 0);
//     const norm = Math.sqrt(sumOfSquares);
//     const normalizedVector = targetVector.map((val) => val / norm);

//     console.log(
//       `Normalized Vector for product ID ${productId}:`,
//       normalizedVector
//     );

//     const similarities = products.map((product, index) => {
//       if (index === productIndex) return -1; // Bỏ qua sản phẩm hiện tại
//       const vector = tfidf.listTerms(index).map((term) => term.tfidf);

//       return cosineSimilarity(normalizedVector, vector);
//     });

//     const recommendedIndexes = similarities
//       .map((similarity, index) => ({ similarity, index }))
//       .sort((a, b) => b.similarity - a.similarity)
//       .slice(0, 5) // Số lượng sản phẩm muốn đề xuất
//       .map((item) => item.index);

//     return recommendedIndexes.map((index) => products[index]);
//   } catch (error) {
//     console.error("Error in recommendProducts:", error);
//     throw error;
//   }
// };

const _ = require("lodash");

const punctuationChars = /[~`!@#$%^&*()-_=+\[\]{}\\|;:'",<.>/?]/g;
const stopWords = [
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
  "mười",
  "và",
  "hoặc",
  "của",
  "trong",
  "ở",
  "tới",
  "đến",
  "cho",
  "về",
  "với",
  "cùng",
  "là",
  "được",
  "từ",
  "đi",
  "điều",
  "này",
  "đó",
];

const preprocessText = (text) => {
  text = text || "";
  text = text.replace(punctuationChars, " ");
  text = text.toLowerCase();
  const words = text.split(/\s+/).filter((word) => !stopWords.includes(word));
  return words.join(" ");
};

const computeTF = (term, words) => {
  const termFrequency = words.filter((w) => w === term).length;
  return termFrequency / words.length;
};

const computeIDF = (term, books) => {
  const documentFrequency = books.filter((book) =>
    preprocessText(book.description).includes(term)
  ).length;
  return Math.log(books.length / (documentFrequency || 1));
};

const computeTFIDF = (term, words, books) => {
  const tf = computeTF(term, words);
  const idf = computeIDF(term, books);
  return tf * idf;
};

const featureVector = (book, books) => {
  const words = preprocessText(book.description).split(" ");
  const uniqueWords = [...new Set(words)];
  return uniqueWords.map((word) => computeTFIDF(word, words, books));
};

const dotProduct = (vectorA, vectorB) => {
  return _.zipWith(vectorA, vectorB, (a, b) => a * b).reduce(
    (sum, value) => sum + value,
    0
  );
};

const norm = (vector) => {
  return Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
};

const computeCosineSimilarity = (vectorA, vectorB) => {
  adjustVectors(vectorA, vectorB);
  const dotProductValue = dotProduct(vectorA, vectorB);
  const normA = norm(vectorA);
  const normB = norm(vectorB);

  return normA === 0 || normB === 0 ? 0.0 : dotProductValue / (normA * normB);
};

const adjustVectors = (vectorA, vectorB) => {
  const maxLength = Math.max(vectorA.length, vectorB.length);
  while (vectorA.length < maxLength) vectorA.push(0);
  while (vectorB.length < maxLength) vectorB.push(0);
};

const recommendProducts = async (bookId, take = 10) => {
  const book = await db.Books.findByPk(bookId);
  const books = await db.Books.findAll();
  const vectorA = featureVector(book, books);

  const similarBooksDictionary = await Promise.all(
    books.map(async (otherBook) => {
      const vectorB = featureVector(otherBook, books);
      const similarity = computeCosineSimilarity(vectorA, vectorB);
      return { id: otherBook.id, similarity };
    })
  );

  const validSimilarBooks = similarBooksDictionary.filter(
    (entry) => entry.similarity >= 0 && entry.id !== book.id
  );

  if (validSimilarBooks.length === 0) {
    console.warn("No valid similar books found.");
    return [];
  }

  const sortedBooks = validSimilarBooks
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, take);

  const recommendedBookIds = sortedBooks.map((entry) => entry.id);

  const recommendedBooks = await db.Books.findAll({
    where: {
      id: recommendedBookIds,
    },
  });

  const recommendedBooksMap = _.keyBy(recommendedBooks, "id");
  const orderedRecommendedBooks = recommendedBookIds.map(
    (id) => recommendedBooksMap[id]
  );

  return orderedRecommendedBooks;
};

module.exports = {
  getAllProducts,
  createProduct,
  removeProduct,
  updateProduct,
  getAllProductById,
  recommendByGenren,
  fetchPaginatedProduct,
  findNameProduct,
  getByPriceProduct,
  recommendProducts,
};
