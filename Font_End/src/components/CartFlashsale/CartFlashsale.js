import cardImg from "../../public/assets/img/cards/card1.jpg";
import "./CartFlashsale.scss";
const CartFlashsale = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <>
      <div className="Cart_flashsale mx-2">
        <img src={items.img_book} alt="img-product" />
        <div className="title">{items?.title}</div>
        <div className="special-priceprice">
          <span>{items?.price} đ</span>
          <span className="sales">
            {Math.round(((items?.sales - items?.price) / items?.sales) * 100)}%
          </span>
        </div>
        <div className="old-price">{items?.sales}</div>
      </div>
    </>
  );
};

export default CartFlashsale;
