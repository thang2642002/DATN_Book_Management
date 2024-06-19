import "./OrderDetails.scss";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { getListOrderDetails } from "../../../services/orderDetailsService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const OrderDetails = () => {
  const [dataOrderDetails, setDataOrderDetails] = useState([]);
  const user = useSelector((state) => state.user);
  const getOrderDetails = async () => {
    const data = await getListOrderDetails();
    setDataOrderDetails(data.data);
    console.log("data", data);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    dataOrderDetails.forEach((product, index) => {
      const unit_price = product.unit_price || 0;
      const quantity = product.quantity || 0;
      const productTotal = unit_price * quantity;
      totalPrice += productTotal;
    });

    return totalPrice;
  };
  const totalPrice = calculateTotalPrice();

  useEffect(() => {
    getOrderDetails();
  }, []);
  return (
    <div className="order-container">
      <div className="hearder-order">
        <div className="title">Tất cả</div>
      </div>
      <div className="conten-order-container">
        <div className="title-order">
          <div className="name-details-order">Chi Tiết Đơn Hàng</div>
          <div className="transaction">
            <span className="order-success">Đặt Hàng Thành Công</span>
            <span className="warning-order">Chờ Giao Hàng</span>
          </div>
        </div>
        <div className="title-product">
          <div className="title-img">Hình Ảnh</div>
          <div className="product-title">Tiêu Đề</div>
          <div className="quantity-title">Số Lượng</div>
          <div className="price-title">Giá Bán</div>
        </div>
        {dataOrderDetails &&
          dataOrderDetails.map((item, index) => {
            console.log("item", item);
            if (item.userId === user.id) {
              return (
                <div className="details-product" key={index}>
                  <div className="img-product">
                    <img src={item?.Book?.img_book} alt="ảnh" />
                  </div>
                  <div className="title-product">{item?.Book?.title}</div>
                  <div className="title-quantity">{item?.quantity}</div>
                  <div className="price-product">{item?.unit_price}</div>
                </div>
              );
            }
          })}
        <div className="sum-product">
          <div className="total-price">Tổng tiền đơn hàng: {totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
