import { Row, Col } from "react-bootstrap";
import ButtonSee from "../../ButonSeeMore/Button";
import CardProduct from "../../CardProduct/CardProduct";

import "./ContentListProduct.scss";
import { useState, useEffect } from "react";

const ContentListProduct = () => {
  // const [listProduct, setListProduct] = useState([]);

  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        return (
        <Col lg={2}>
          <CardProduct />
        </Col>
        );
      </Row>
      <div className="btn-more">
        <ButtonSee />
      </div>
    </>
  );
};

export default ContentListProduct;
