import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../services/userService";
import { resert } from "../../redux/Slice/userSlice";
import "./HeaderClient.scss";

const HeaderClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLoginAccount = () => {
    navigate("/sign-in");
  };

  const handleLogOut = async () => {
    await logOut();
    localStorage.removeItem("acceess_tokens");
    dispatch(resert());
  };
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
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className="btn-search"
                >
                  Tìm kiếm
                </Button>
              </InputGroup>
            </div>
          </Col>
          <Col sm={4}>
            <div className="content-info">
              <div className="cart">
                <button variant="outline-secondary" className="btn-header">
                  <FaBell className="icon" />
                  Thông báo
                </button>
              </div>
              <div className="cart">
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
                            <Link>
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
                              <li>
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
              <div className="note">
                <button variant="light" className="btn-header">
                  <FaShoppingCart className="icon" />
                  Giỏ hàng
                </button>
              </div>
              <div className="cart">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    VN
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderClient;
