import { Row, Col } from "react-bootstrap";
import ButtonSee from "../../ButonSeeMore/Button";
import CardProduct from "../../CardProduct/CardProduct";

import "./ContentListProduct.scss";
import { useState, useEffect } from "react";

const ContentListProduct = (props) => {
  // const [listProduct, setListProduct] = useState([]);
  const { books } = props;
  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        {books.map((book, index) => (
          <Col key={index} xs={6} md={4} lg={2}>
            <CardProduct product={book} />
          </Col>
        ))}
      </Row>
      <div className="btn-more">
        <ButtonSee />
      </div>
    </>
  );
};

export default ContentListProduct;
