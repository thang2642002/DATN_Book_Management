import cardImg from "../../public/assets/img/cards/card1.jpg";
import "./CartFlashsale.scss";
const CartFlashsale = () => {
  return (
    <>
      <div className="Cart_flashsale">
        <img src={cardImg} alt="img-product" />
        <div className="title">Liễu Phàm Tứ Huấn</div>
        <div className="special-priceprice">
          <span>40.120 đ</span>
          <span>-32%</span>
        </div>
        <div className="old-price">59.000</div>
      </div>
    </>
  );
};

export default CartFlashsale;
