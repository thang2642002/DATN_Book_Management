import { Row, Col } from "react-bootstrap";
import ButtonSee from "../../ButonSeeMore/Button";
import CardProduct from "../../CardProduct/CardProduct";

import "./ContentListProduct.scss";
const ContentListProduct = () => {
  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        <Col lg={2}>
          <CardProduct />
        </Col>
        <Col lg={2}>
          <CardProduct />
        </Col>
        <Col lg={2}>
          <CardProduct />
        </Col>
        <Col lg={2}>
          <CardProduct />
        </Col>
        <Col lg={2}>
          <CardProduct />
        </Col>
        <Col lg={2}>
          <CardProduct />
        </Col>
      </Row>
      <div className="btn-more">
        <ButtonSee />
      </div>
    </>
  );
};

export default ContentListProduct;
