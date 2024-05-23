import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "../../../components/NavbarComponents/NavbarComponent";
import CardProduct from "../../../components/CardProduct/CardProduct";

const TypeProductPage = () => {
  return (
    <div className="type-product-container">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="type-product-navbar">
              <NavbarComponent />
            </div>
          </Col>
          <Col lg={9}>
            <div className="type-product-content">
              <Row>
                <Col lg={3}>
                  <CardProduct />
                </Col>
                <Col lg={3}>
                  <CardProduct />
                </Col>
                <Col lg={3}>
                  <CardProduct />
                </Col>
                <Col lg={3}>
                  <CardProduct />
                </Col>
                <Col lg={3}>
                  <CardProduct />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypeProductPage;
