import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./ContentsCarts.scss";
import img from "../../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { useState } from "react";
const ContentsCarts = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="contents-carts-container">
      <div className="title-carts">Giỏ hàng</div>
      <div className="content-carts">
        <Row>
          <Col lg={9}>
            <div className="details-product">
              <div className="title-carts-product">
                <Form.Check inline label="Tất cả" className="check-box" />
                <div className="title-price">Đơn giá</div>
                <div className="title-quantity">Số lượng</div>
                <div className="title-total-price">Thành tiền</div>
              </div>
              <div className="product-carts">
                <div className="title">Sản phẩm</div>
                <div className="info-product">
                  <Form.Check inline label="" />

                  <div className="title-product">
                    <img src={img} alt="product" />
                    <div>
                      Điện thoại Xiaomi Redmi Note 13 (6GB/128GB) - Hàng chính
                      hãng - Xanh
                    </div>
                  </div>
                  <div className="price-product">4.090.000 đ</div>
                  <div className="count-product">
                    <span
                      className="minus"
                      onClick={() =>
                        quantity > 0
                          ? setQuantity(quantity - 1)
                          : setQuantity(0)
                      }
                    >
                      <MinusOutlined />
                    </span>
                    <input
                      value={quantity}
                      style={{
                        width: "40px",
                        height: "34px",
                        border: "1px solid #ccc",
                        paddingLeft: "15px",
                      }}
                    />

                    <span
                      className="plus"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <PlusOutlined />
                    </span>
                  </div>
                  <div className="total-price-product">4.090.000 đ</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="total-payment">
              <div className="total-price">
                <div className="provisional">
                  <div className="title">Tạm tính</div>
                  <div className="price">0 đ</div>
                </div>
                <div className="sum-price">
                  <div className="title">Tạm tính</div>
                  <div className="price">0 đ</div>
                </div>
              </div>
              <button className="btn">Thanh Toán</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContentsCarts;
