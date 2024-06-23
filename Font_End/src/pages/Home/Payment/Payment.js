import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { PayPalButton } from "react-paypal-button-v2";
import { getIdClient } from "../../../services/payPallService";
import { createOrder, getListOrder } from "../../../services/orderService";
import { createOrderDetails } from "../../../services/orderDetailsService";
import { SendEmail } from "../../../services/sendEmailService";
import "./Payment.scss";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const [showPayPall, setPayPall] = useState(false);
  const [SdkReady, setSdkReady] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log("user", user);
  const checkPayPall = (e) => {
    if (e.target.value === "paypall") {
      setPayPall(true);
    } else {
      setPayPall(false);
    }
  };

  console.log("data", data);

  const checkPayment = (e) => {
    if (e.target.value === "payment") {
      setPayPall(false);
    } else {
      setPayPall(true);
    }
  };

  const GetPayPallShop = async () => {
    const { data } = await getIdClient();
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const createOrderDetailsForOrder = async (orderId, userId) => {
    try {
      const orderDetailsPromises = data.listBuy.map((item) => {
        return createOrderDetails(
          item.quantity,
          item.Book.price,
          orderId,
          item.Book.id,
          userId
        );
      });
      const orderDetailsResults = await Promise.all(orderDetailsPromises);
      return orderDetailsResults;
    } catch (error) {
      console.error("Lỗi khi tạo chi tiết đơn hàng", error);
    }
  };

  const handPaymentSuccess = async () => {
    try {
      const dataOrder = await createOrder(data.totalPrice, user.id);
      console.log("dataOrder", dataOrder);
      const orderId = dataOrder.data.id;
      if (dataOrder && dataOrder.errcode === 0) {
        let dataOrderDetails = await createOrderDetailsForOrder(
          orderId,
          user.id
        );
        console.log("dataOrderDetails", dataOrderDetails);
        dataOrderDetails.filter((detail) => detail.errcode === 0);
        toast.success("Thanh toán thành công");
        await SendEmail(user.email, data);
      } else {
        console.log("lỗi", dataOrder.message);
        toast.error("Thanh toán thất bại");
      }
      setTimeout(() => {
        navigate(`/info-user/order-details`);
      }, 3000);
    } catch (error) {
      console.error("Thanh toán thất bại", error);
      toast.error("Thanh toán thất bại");
      await SendEmail(user.email, data);
    }
  };

  const onSuccessPaypal = async () => {
    try {
      const dataOrder = await createOrder(data.totalPrice, user.id);
      console.log("dataOrder", dataOrder);
      const orderId = dataOrder.data.id;
      if (dataOrder && dataOrder.errcode === 0) {
        let dataOrderDetails = await createOrderDetailsForOrder(
          orderId,
          user.id
        );
        dataOrderDetails.filter((detail) => detail.errcode === 0);
        toast.success("Thanh toán thành công");
        await SendEmail(user.email, data);
      } else {
        console.log("lỗi", dataOrder.message);
        toast.error("Thanh toán thất bại");
      }
      setTimeout(() => {
        navigate(`/info-user/order-details`);
      }, 3000);
    } catch (error) {
      console.error("Thanh toán thất bại", error);
      toast.error("Thanh toán thất bại");
    }
  };

  useEffect(() => {}, [showPayPall]);

  useEffect(() => {
    if (!window.paypal) {
      GetPayPallShop();
    } else {
      setSdkReady(true);
    }
  }, []);

  return (
    <div className="payment-container">
      <Container>
        <div className="content-payment">
          <div className="delivery-address">
            <div className="title">Địa chỉ giao hàng</div>
            <div className="info-user">
              <span className="name">{user.username}</span>
              <span className="address">{user.address}</span>
              <span className="phone">{user.phone}</span>
            </div>
          </div>

          <div className="payment-transaction">
            <div className="title">Phương thức Thanh toán</div>
            <div className="transaction">
              <div className="check">
                <Form.Check
                  inline
                  label="Thanh toán bằng Ví Paypall"
                  name="paypall"
                  type="radio"
                  value="paypall"
                  id="1"
                  className="check-radio"
                  onChange={checkPayPall}
                />
              </div>
              <div>
                <Form.Check
                  inline
                  label="Thanh toán khi nhận hàng"
                  name="paypall"
                  value="payment"
                  type="radio"
                  id="2"
                  className="check-radio"
                  onChange={checkPayment}
                />
              </div>
            </div>
          </div>
          <div className="check-product">
            <div className="title">KIỂM TRA LẠI ĐƠN HÀNG</div>

            {data.listBuy &&
              data.listBuy.map((item, index) => {
                return (
                  <Row>
                    <div className="product" key={index + 1}>
                      <Col md={2} lg={2}>
                        <div className="img-product">
                          <img src={item?.Book?.img_book} alt="product" />
                        </div>
                      </Col>
                      <Col md={4} lg={4}>
                        <div className="title-product">{item?.Book?.title}</div>
                      </Col>

                      <Col md={3} lg={2}>
                        <div className="sales-product">{item?.Book?.price}</div>
                      </Col>
                      <Col md={3} lg={2}>
                        <div className="price-product">
                          {item?.Book?.price * item?.quantity} đ
                        </div>
                      </Col>
                    </div>
                  </Row>
                );
              })}
          </div>
          <div className="total">
            <div className="total_price">
              Tổng tiền: <span>{data.totalPrice}</span>
            </div>
          </div>
          <div className="btn-confirm">
            {showPayPall ? (
              <PayPalButton
                amount={(data.totalPrice / 32000).toFixed(2)}
                onSuccess={onSuccessPaypal}
                onError={(e) => {
                  console.log(e);
                }}
              />
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handPaymentSuccess}
              >
                Xác nhận đặt hàng
              </button>
            )}
          </div>
        </div>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Payment;
