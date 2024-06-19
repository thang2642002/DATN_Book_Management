import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "../../../components/NavbarComponents/NavbarComponent";
import CardProduct from "../../../components/CardProduct/CardProduct";
import { useEffect, useState } from "react";
import { getListBooks } from "../../../services/BookService";
const TypeProductPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const getAllProduct = async () => {
    const product = await getListBooks();
    setDataProduct(product.data);
  };

  console.log("dataProduct", dataProduct);

  useEffect(() => {
    getAllProduct();
  }, []);
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
                {dataProduct &&
                  dataProduct.map((product, index) => {
                    return (
                      <Col lg={3} key={index + 1}>
                        <CardProduct product={product} />
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypeProductPage;
