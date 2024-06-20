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
  sales
) => {
  const dataBook = new FormData();
  dataBook.append("title", title);
  dataBook.append("img_book", img_book);
  dataBook.append("authorId", authorId);
  dataBook.append("genresId", genresId);
  dataBook.append("price", price);
  dataBook.append("quantity", quantity);
  dataBook.append("sales", sales);

  console.log(
    "data create",
    title,
    img_book,
    authorId,
    genresId,
    price,
    quantity,
    sales
  );
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
  sales
) => {
  const dataBook = new FormData();
  dataBook.append("title", title);
  dataBook.append("img_book", img_book);
  dataBook.append("authorId", authorId);
  dataBook.append("genresId", genresId);
  dataBook.append("price", price);
  dataBook.append("quantity", quantity);
  dataBook.append("sales", sales);
  console.log("dataBook", dataBook);
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
const getPage = (page, pageSize) => {
  return axios.get(`/api/products/get-page?page=${page}&pageSize=${pageSize}`);
};

export {
  getListBooks,
  deleteBook,
  getBookById,
  createBook,
  updateBook,
  recommendation,
  getPage,
};
