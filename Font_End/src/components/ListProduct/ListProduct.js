import HeaderListProduct from "./HeaderListProduct/HeaderListProduct";
import ContentListProduct from "./ContentListProduct/ContentListProduct";
const ListProduct = () => {
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
