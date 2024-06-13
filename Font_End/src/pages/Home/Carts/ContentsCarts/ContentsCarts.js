import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./ContentsCarts.scss";
import img from "../../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { getListCart } from "../../../../services/cartsService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../redux/Slice/productSlice";

const ContentsCarts = () => {
  const [quantity, setQuantity] = useState();
  const [listCarts, setListCarts] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let totalQuantity = 0;
  const [countquantity, setCountQuantity] = useState(0);
  const ListCart = async () => {
    const data = await getListCart();
    console.log("data", data.data);
    setListCarts(data.data);
  };

  useEffect(() => {
    ListCart();
    dispatch(updateProduct(countquantity));
    console.log("listCarts", listCarts);
  }, [countquantity]);

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
                {listCarts.map((product, index) => {
                  if (product.userId === user.id) {
                    totalQuantity += product?.quantity;
                    setCountQuantity(totalQuantity);
                    // console.log("totalQuantity", totalQuantity);
                    return (
                      <div className="info-product">
                        <Form.Check inline />
                        <div className="title-product">
                          <img src={img} alt="product" />
                          <div>{product?.Books[0]?.title}</div>
                        </div>
                        <div className="price-product">
                          {product?.Books[0]?.price} đ
                        </div>
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
                            value={product.quantity}
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
                        <div className="total-price-product">
                          {product?.Books[0]?.price * product?.quantity} đ
                        </div>
                      </div>
                    );
                  }
                })}
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
