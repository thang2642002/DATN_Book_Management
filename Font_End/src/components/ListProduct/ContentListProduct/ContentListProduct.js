import { Row, Col } from "react-bootstrap";
import ButtonSee from "../../ButonSeeMore/Button";
import CardProduct from "../../CardProduct/CardProduct";
import { getListBooks } from "../../../services/BookService";

import "./ContentListProduct.scss";
import { useState } from "react";
import { useEffect } from "react";
const ContentListProduct = () => {
  const [listProduct, setListProduct] = useState([]);

  const fetchListProduct = async () => {
    const dataProduct = await getListBooks();
    setListProduct(dataProduct);
  };

  useEffect = () => {
    fetchListProduct();
  };
  return (
    <>
      <Row style={{ padding: "0", margin: "0" }}>
        {listProduct &&
          listProduct.map((product, index) => {
            return (
              <Col lg={2} key={index + 1}>
                <CardProduct product={product} />
              </Col>
            );
          })}
      </Row>
      <div className="btn-more">
        <ButtonSee />
      </div>
    </>
  );
};

export default ContentListProduct;
