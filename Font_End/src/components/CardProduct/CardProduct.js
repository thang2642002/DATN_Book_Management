import { Link } from "react-router-dom";
import "./CardProduct.scss";

const CardProduct = (props) => {
  const { product } = props;

  return (
    <>
      <Link
        to={`/product-detail/${product?.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="card-product">
          <div className="img-product">
            <img src={product?.img_book} alt="img-product" />
          </div>
          <div className="title-product">{product?.title}</div>
          <div className="special-price">
            <span>{product?.price} đ</span>
            <span className="salse">
              {Math.round(
                ((product?.sales - product?.price) / product?.sales) * 100
              )}
              %
            </span>
          </div>
          <div className="old-price">{product?.price}</div>
          <div className="sales">
            {product?.sales} <span>Lượt mua</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
