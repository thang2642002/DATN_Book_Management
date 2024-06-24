import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { AutoComplete } from "antd";
import { Link, Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../services/userService";
import { resetUser } from "../../redux/Slice/userSlice";
import { getNameProduct } from "../../services/BookService";

import "./HeaderClient.scss";
import { ToastContainer, toast } from "react-toastify";
import { resetProduct, updateProduct } from "../../redux/Slice/productSlice";
import { getListCartItem } from "../../services/cartItemService";
const HeaderClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const addQuantity = async (id) => {
    const data = await getListCartItem();
    if (data) {
      let quantity = 0;
      data.data
        .filter((item) => item?.Cart?.userId === id)
        .map((product, index) => {
          quantity += product?.quantity;
        });
      dispatch(updateProduct(quantity));
    }
  };

  if (user) {
    addQuantity(user.id);
  }

  const product = useSelector((state) => state.product);
  const [listFindProduct, setListFindProduct] = useState([]);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log("product", product);

  const handleLoginAccount = () => {
    navigate("/sign-in");
  };

  const handleLogOut = async () => {
    await logOut();
    localStorage.removeItem("acceess_tokens");
    dispatch(resetUser());
    dispatch(resetProduct());
  };

  const handleOnCart = () => {
    if (user.id !== "") {
      navigate("/carts");
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };

  const getProductName = async (nameProduct) => {
    const dataNameProduct = await getNameProduct(nameProduct);
    setListFindProduct(dataNameProduct.data);
  };

  const onSelect = (value) => {
    console.log("value", value);
    navigate(`/product-detail/${value}`);
    setOptions([]);
    setListFindProduct([]);
    setInputValue("");
  };

  const handleSearch = (value) => {
    setInputValue(value);
    if (value) {
      getProductName(value);
    } else {
      setListFindProduct([]);
    }
    setOptions(() => {
      console.log(options);
      return listFindProduct.map((product, index) => ({
        label: `${product.title}`,
        value: `${product.id}`,
        placeholder: "",
      }));
    });
  };

  useEffect(() => {}, [product]);

  return (
    <div className="container-header">
      <Container>
        <Row>
          <Col sm={2}>
            <Link to="/" style={{ "text-decoration": "none" }}>
              <div className="logo">BookStore</div>
            </Link>
          </Col>
          <Col sm={6}>
            <div className="search">
              <AutoComplete
                style={{
                  width: 200,
                }}
                onSearch={handleSearch}
                placeholder="input here"
                options={options}
                onSelect={onSelect}
                value={inputValue}
                onChange={setInputValue}
              />
            </div>
          </Col>
          <Col sm={4}>
            <div className="content-info">
              <div className="note">
                <button variant="outline-secondary" className="btn-header">
                  <FaBell className="icon" />
                  Thông báo
                </button>
              </div>
              <div className="info-user">
                <button variant="light" className="btn-header">
                  <MdAccountCircle className="icon" />
                  {user?.username.length > 0 ? (
                    user.username
                  ) : (
                    <span onClick={handleLoginAccount}>Tài Khoản</span>
                  )}
                  {user?.username.length > 0 ? (
                    <>
                      {user.role === "ADMIN" ? (
                        <>
                          <ul>
                            <Link to="/info-user">
                              <li>Thông tin tài khoản</li>
                            </Link>
                            <Link to="/admin">
                              <li>Quản lý trang</li>
                            </Link>
                            <li onClick={handleLogOut}>Đăng xuất</li>
                          </ul>
                        </>
                      ) : (
                        <>
                          <ul>
                            <Link>
                              <li>Thông tin tài khoản</li>
                            </Link>
                            <Link>
                              <li
                                style={{
                                  textDecoration: "none",
                                  color: "#fff",
                                }}
                              >
                                <Link to="/carts">Đơn hàng</Link>
                              </li>
                            </Link>
                            <li onClick={handleLogOut}>Đăng xuất</li>
                          </ul>
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
              <div className="carts">
                <button variant="light" className="btn-header">
                  <FaShoppingCart className="icon" />
                  <span onClick={handleOnCart} className="cart-item">
                    Giỏ hàng
                  </span>
                  <span className="quantity-cart-item">{product.quantity}</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
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

export default HeaderClient;
