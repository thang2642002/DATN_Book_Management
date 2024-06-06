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
import "./HeaderClient.scss";

const HeaderClient = () => {
  const navigate = useNavigate();

  const handleLoginAccount = () => {
    navigate("/sign-in");
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
              <div className="cart" onClick={handleLoginAccount}>
                <button variant="light" className="btn-header">
                  <MdAccountCircle className="icon" />
                  Tài Khoản
                  <ul>
                    <li>Thông tin tài khoản</li>
                    <li>Đơn hàng</li>
                    <li>Đăng xuất</li>
                  </ul>
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
