import img2 from "../../public/assets/img/cards/card2.jpg";
import "./CardProduct.scss";
const CardProduct = (props) => {
  const { product } = props;
  return (
    <div className="card-product">
      <div className="img-product">
        <img src={img2} alt="img-product" />
      </div>
      <div className="title-product">{product.title}</div>
      <div className="special-price">
        <span>{product.price} đ</span>
        <span>-32%</span>
      </div>
      <div className="old-price">{product.sales}</div>
      <div className="sales">
        {product.quantity} <span>Lượt mua</span>
      </div>
    </div>
  );
};

export default CardProduct;
