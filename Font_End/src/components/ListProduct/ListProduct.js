import HeaderListProduct from "./HeaderListProduct/HeaderListProduct";
import ContentListProduct from "./ContentListProduct/ContentListProduct";
import { useEffect, useState } from "react";
import { getListBooks } from "../../services/BookService";
const ListProduct = () => {
  const [listproductblock, setListProductBlock] = useState([]);
  const fetchListProduct = async () => {
    const dataProduct = await getListBooks();
    setListProductBlock(dataProduct.data);
    console.log("check listproductblock", dataProduct.data);
  };

  useEffect(() => {
    fetchListProduct();
  }, []);

  return (
    <div
      className="list-product-container"
      style={{ margin: "10px 0", backgroundColor: "#fff" }}
    >
      <HeaderListProduct />
      <ContentListProduct />
    </div>
  );
};

export default ListProduct;
