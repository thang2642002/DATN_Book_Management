import axios from "../utils/axiosCustommize";

const getListBooks = () => {
  return axios.get("/api/products/get-all-product");
};

const createBook = (
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
  const dataBook = new FormData();
  dataBook.append("title", title);
  dataBook.append("img_book", img_book);
  dataBook.append("authorId", authorId);
  dataBook.append("genresId", genresId);
  dataBook.append("price", price);
  dataBook.append("quantity", quantity);
  dataBook.append("sales", sales);
  dataBook.append("supplierId", supplierId);
  dataBook.append("description", description);
  return axios.post(`/api/products/craete-product`, dataBook);
};

const updateBook = (
  id,
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
  const dataBook = new FormData();
  dataBook.append("title", title);
  dataBook.append("img_book", img_book);
  dataBook.append("authorId", authorId);
  dataBook.append("genresId", genresId);
  dataBook.append("price", price);
  dataBook.append("quantity", quantity);
  dataBook.append("sales", sales);
  dataBook.append("supplierId", supplierId);
  dataBook.append("description", description);
  console.log("dataBook", dataBook.description);
  return axios.put(`/api/products/update-product/${id}`, dataBook);
};

const deleteBook = (id) => {
  return axios.delete(`/api/products/delete-product/${id}`, { data: { id } });
};

const getBookById = (id) => {
  return axios.get(`/api/products/get-product-by-id/${id}`, { data: { id } });
};

const recommendation = (bookId) => {
  return axios.get(`/api/products/recommendation/authors_genres/${bookId}`, {
    data: { bookId },
  });
};
const getPage = (page, pageSize, genresId) => {
  return axios.get(
    `/api/products/get-page?page=${page}&pageSize=${pageSize}&genresId=${genresId}`
  );
};

const getNameProduct = (nameProduct) => {
  console.log("nameProduct", nameProduct);
  return axios.get(`/api/products/get-product-name/${nameProduct}`);
};

const getPriceProduct = (minPrice, maxPrice) => {
  console.log(minPrice, maxPrice);
  if (maxPrice !== null && minPrice !== null) {
    return axios.get(
      `/api/products/get-product-by-price?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  } else if (maxPrice !== null) {
    return axios.get(`/api/products/get-product-by-price?maxPrice=${maxPrice}`);
  } else {
    return axios.get(`/api/products/get-product-by-price?minPrice=${minPrice}`);
  }
};

const recommendationDescription = (productId, take) => {
  return axios.get(
    `/api/products/recommendation/description/${productId}/${take}`
  );
};

export {
  getListBooks,
  deleteBook,
  getBookById,
  createBook,
  updateBook,
  recommendation,
  getPage,
  getNameProduct,
  getPriceProduct,
  recommendationDescription,
};
