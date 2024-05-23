import img2 from "../../public/assets/img/cards/card2.jpg";
import "./CardProduct.scss";
const CardProduct = () => {
  return (
    <div className="card-product">
      <div className="img-product">
        <img src={img2} alt="img-product" />
      </div>
      <div className="title-product">Chiến thắng con quỷ trong bạn</div>
      <div className="special-price">
        <span>40.120 đ</span>
        <span>-32%</span>
      </div>
      <div className="old-price">59.000</div>
      <div className="sales">
        120 <span>Lượt mua</span>
      </div>
    </div>
  );
};

export default CardProduct;
