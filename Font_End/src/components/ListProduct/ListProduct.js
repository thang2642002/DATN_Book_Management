import HeaderListProduct from "./HeaderListProduct/HeaderListProduct";
import ContentListProduct from "./ContentListProduct/ContentListProduct";
import { useEffect, useState } from "react";
import { getListBooks } from "../../services/BookService";

const ListProduct = () => {
  const [listproductblock, setListProductBlock] = useState([]);

  const fetchListProduct = async () => {
    const dataProduct = await getListBooks();
    setListProductBlock(dataProduct.data);
  };

  useEffect(() => {
    fetchListProduct();
  }, []);

  // Group books by genre
  const groupByGenre = () => {
    return listproductblock.reduce((acc, product) => {
      const genreName = product.Genre.genres_name;
      if (!acc[genreName]) {
        acc[genreName] = [];
      }
      acc[genreName].push(product);
      return acc;
    }, {});
  };

  const groupedBooks = groupByGenre();

  return (
    <>
      {Object.keys(groupedBooks).map((genre, index) => (
        <div
          key={index}
          className="list-product-container"
          style={{ margin: "10px 0", backgroundColor: "#fff" }}
        >
          <HeaderListProduct genre={groupedBooks[genre][0].Genre} />
          <ContentListProduct books={groupedBooks[genre]} />
        </div>
      ))}
    </>
  );
};

export default ListProduct;
