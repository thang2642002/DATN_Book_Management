import "./OrderDetails.scss";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
const OrderDetails = () => {
  return (
    <div className="order-container">
      <div className="hearder-order">
        <div className="title">Tất cả</div>
      </div>
      <div className="conten-order-container">
        <div className="title-order">
          <div className="name-supplier">nhà cung cấp</div>
          <div className="transaction">
            <span>Đặt hàng thành công</span>
            <span>chờ Giao hàng</span>
          </div>
        </div>

        <div className="details-product">
          <div className="img-product">
            <img src={img} alt="ảnh" />
          </div>
          <div className="title-product">Sách giáo khoa</div>
          <div className="price-product">10000</div>
        </div>
        <div className="total-price">100000</div>
      </div>
    </div>
  );
};

export default OrderDetails;
