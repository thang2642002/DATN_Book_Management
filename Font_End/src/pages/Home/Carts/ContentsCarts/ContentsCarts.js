import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./ContentsCarts.scss";
import img from "../../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { deleteCarts } from "../../../../services/cartsService";
import {
  getListCartItem,
  deleteProductCart,
  updateCartItem,
} from "../../../../services/cartItemService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../redux/Slice/productSlice";
import { useNavigate } from "react-router-dom";

const ContentsCarts = () => {
  const [quantity, setQuantity] = useState();
  const [listCartsItem, setListCartsItem] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [listBuy, setListBuy] = useState([]);
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const ListCart = async () => {
    const data = await getListCartItem();
    console.log("data", data.data);
    setListCartsItem(data.data);
    console.log("listCartsItem", data.data);
  };
  const handleCheckAll = () => {
    const newCheckAll = !checkAll;
    setCheckAll(newCheckAll);
    const newCheckedItems = {};
    listCartsItem.forEach((product, index) => {
      newCheckedItems[index] = newCheckAll;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckChange = (index, product) => {
    const newCheckedItems = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newCheckedItems);
    const allChecked = Object.values(newCheckedItems).every(
      (isChecked) => isChecked
    );
    setCheckAll(allChecked);
    if (checkedItems[index] === true) {
      setListBuy((item) => item.filter((item) => item.id !== product.id));
    } else {
      setListBuy((item) => [...item, product]);
    }
  };

  console.log("chekk ListBuy", listBuy);
  const handleDeleteCart = async (cartId, bookId) => {
    const dataDelete = await deleteProductCart(cartId, bookId);
    if (dataDelete && dataDelete.errCode === 0) {
      toast.success(dataDelete.message);
      ListCart();
    } else {
      toast.error(dataDelete.message);
    }
  };

  console.log("checkedItems", checkedItems);

  useEffect(() => {
    ListCart();
  }, []);

  const handleQuantityChange = async (index, newQuantity, id) => {
    const updatedList = [...listCartsItem];
    updatedList[index].quantity = newQuantity;
    setListCartsItem(updatedList);
    await updateCartItem(id, newQuantity);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    listCartsItem.forEach((product, index) => {
      if (checkedItems[index]) {
        const price = product?.Book?.price || 0;
        const quantity = product?.quantity || 0;
        const productTotal = price * quantity;
        totalPrice += productTotal;
      }
    });

    return totalPrice;
  };
  const totalPrice = calculateTotalPrice();

  const deleteAllCarts = async (id) => {
    const dataDelete = await deleteCarts(id);
    if (checkAll) {
      if (dataDelete && dataDelete.errcode === 0) {
        toast.success(dataDelete.message);
        ListCart();
      }
    } else {
      toast.error("Vui lòng chọn sản phẩm");
    }
  };

  const handleBuy = () => {
    const data = { listBuy, totalPrice };
    Navigate("/payment", { state: data });
  };

  return (
    <div className="contents-carts-container">
      <div className="title-carts">Giỏ hàng</div>
      <div className="content-carts">
        <Row>
          <Col lg={9}>
            <div className="details-product">
              <div className="title-carts-product">
                <Form.Check
                  inline
                  label="Tất cả"
                  className="check-box"
                  value="check"
                  checked={checkAll}
                  onChange={handleCheckAll}
                />
                <div className="title-price">Đơn giá</div>
                <div className="title-quantity">Số lượng</div>
                <div className="title-total-price">Thành tiền</div>
                <div className="delete">
                  <MdDelete onClick={() => deleteAllCarts(user.id)} />
                </div>
              </div>
              <div className="product-carts">
                <div className="title">Sản phẩm</div>
                {console.log("listCartsItem", listCartsItem)}
                {listCartsItem.map((product, index) => {
                  if (product?.Cart?.userId === user?.id) {
                    console.log("user", user?.id);
                    console.log("produt", product?.Cart?.userId);
                    return (
                      <div className="info-product">
                        <Form.Check
                          inline
                          value="check"
                          checked={checkedItems[index] || false}
                          onChange={() => handleCheckChange(index, product)}
                        />
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
                                product.quantity > 0 ? product.quantity - 1 : 0,
                                product?.id
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
                              handleQuantityChange(
                                index,
                                product.quantity + 1,
                                product?.id
                              )
                            }
                          >
                            <PlusOutlined />
                          </span>
                        </div>
                        <div className="total-price-product">
                          {product?.Book?.price * product?.quantity}
                        </div>
                        {console.log("product", product)}
                        <div
                          className="delete"
                          onClick={() =>
                            handleDeleteCart(product?.cartId, product?.bookId)
                          }
                        >
                          <MdDelete />
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
                  <div className="price">{totalPrice} đ</div>
                </div>
                <div className="sum-price">
                  <div className="title">Tổng tiền</div>
                  <div className="price">{totalPrice} đ</div>
                </div>
              </div>
              <button className="btn" onClick={handleBuy}>
                Thanh Toán
              </button>
            </div>
          </Col>
        </Row>
      </div>
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
export default ContentsCarts;
