import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { MdDelete } from "react-icons/md";
import "./ContentsCarts.scss";
import img from "../../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import {
  getListCartItem,
  deleteProductCart,
} from "../../../../services/cartItemService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../redux/Slice/productSlice";

const ContentsCarts = () => {
  const [quantity, setQuantity] = useState();
  const [listCartsItem, setListCartsItem] = useState([]);

  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // let totalQuantity = 0;
  // const [countquantity, setCountQuantity] = useState(0);
  const ListCart = async () => {
    const data = await getListCartItem();
    console.log("data", data.data);
    setListCartsItem(data.data);
  };

  useEffect(() => {
    ListCart();
    // dispatch(updateProduct(totalQuantity));
    // console.log("listCarts", listCartsItem);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedList = [...listCartsItem];
    updatedList[index].quantity = newQuantity;
    setListCartsItem(updatedList);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    listCartsItem.forEach((product) => {
      const price = product?.Book?.price || 0;
      const quantity = product?.quantity || 0;
      const productTotal = price * quantity;
      totalPrice += productTotal;
    });

    return totalPrice;
  };
  const totalPrice = calculateTotalPrice();

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
                <div className="delete">
                  <MdDelete />
                </div>
              </div>
              <div className="product-carts">
                <div className="title">Sản phẩm</div>

                {listCartsItem.map((product, index) => {
                  /* if (product.userId === user.id) {
                    console.log("product", product);
                  }*/
                  return (
                    <div className="info-product">
                      <Form.Check inline />
                      <div className="title-product">
                        <img src={img} alt="product" />
                        <div>{product?.Book?.title}</div>
                      </div>
                      <div className="price-product">
                        {product?.Book?.price} đ
                      </div>
                      <div className="count-product">
                        <span
                          className="minus"
                          onClick={() =>
                            handleQuantityChange(
                              index,
                              product.quantity > 0 ? product.quantity - 1 : 0
                            )
                          }
                        >
                          <MinusOutlined />
                        </span>
                        <input
                          value={product?.quantity}
                          style={{
                            width: "40px",
                            height: "34px",
                            border: "1px solid #ccc",
                            paddingLeft: "15px",
                          }}
                        />
                        <span
                          className="plus"
                          onClick={() =>
                            handleQuantityChange(index, product.quantity + 1)
                          }
                        >
                          <PlusOutlined />
                        </span>
                      </div>
                      <div className="total-price-product">
                        {product?.Book?.price * product?.quantity}
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="total-payment">
              <div className="total-price">
                <div className="provisional">
                  <div className="title">Tạm tính</div>
                  <div className="price">{totalPrice} đ</div>
                </div>
                <div className="sum-price">
                  <div className="title">Tổng tiền</div>
                  <div className="price">{totalPrice} đ</div>
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
