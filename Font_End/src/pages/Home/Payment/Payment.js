import { Container, ListGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { PayPalButton } from "react-paypal-button-v2";
import { getIdClient } from "../../../services/payPallService";
import { createOrder, getListOrder } from "../../../services/orderService";
import "./Payment.scss";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [showPayPall, setPayPall] = useState(false);
  const [SdkReady, setSdkReady] = useState(false);
  const user = useSelector((state) => state.user);

  const location = useLocation();
  const data = location.state;
  const checkPayPall = (e) => {
    if (e.target.value === "paypall") {
      setPayPall(true);
    } else {
      setPayPall(false);
    }
  };

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
  const handPaymentSuccess = async () => {
    console.log(data.totalPrice, user.id);
    const dataOrder = await createOrder(data.totalPrice, user.id);
    console.log("dataOrder", dataOrder);
  };

  const onSuccessPaypal = async (details, data) => {
    console.log(data.totalPrice, user.id);
    const dataOrder = await createOrder(data.totalPrice, user.id);
    console.log("dataOrder", dataOrder);
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
                  onChange={(e) => checkPayPall(e)}
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
                  onChange={(e) => checkPayment(e)}
                />
              </div>
            </div>
          </div>
          <div className="check-product">
            <div className="title">KIỂM TRA LẠI ĐƠN HÀNG</div>

            {data.listBuy &&
              data.listBuy.map((item, index) => {
                return (
                  <div className="product" key={index + 1}>
                    <div className="img-product">
                      <img src={img} alt="product" />
                    </div>
                    <div className="title-product">{item?.Book?.title}</div>
                    <div className="sales-product">{item?.Book?.price}</div>
                    <div className="quantity-product">{item?.quantity}</div>
                    <div className="price-product">
                      {item?.Book?.price * item?.quantity} đ
                    </div>
                  </div>
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
                class="btn btn-primary"
                onClick={handPaymentSuccess}
              >
                Xác nhận đặt hàng
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Payment;
