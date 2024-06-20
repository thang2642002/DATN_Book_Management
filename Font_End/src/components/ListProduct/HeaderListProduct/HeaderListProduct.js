import "./HeaderListProduct.scss";
const HeaderListProduct = (props) => {
  const { genre } = props;
  return (
    <div className="header-list-product">
      <div className="title-product-header">{genre?.genres_name}</div>
    </div>
  );
};

export default HeaderListProduct;
