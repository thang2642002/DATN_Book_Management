import { Container } from "react-bootstrap";
import NavCatagory from "./ProductDetailComponet/NavCatagory";
import ContenProductDetail from "./ProductDetailComponet/ContenProductDetail";
import { getBookById } from "../../../services/BookService";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  let productId = useParams();
  const [dataProduct, setDataProduct] = useState();

  const fetchProuctById = async (id) => {
    const data = await getBookById(id);
    setDataProduct(data);
  };

  useEffect(() => {
    fetchProuctById(productId.id);
  }, dataProduct);

  return (
    <div className="product-detai-container">
      <Container>
        <div className="nav-product-detail">
          <NavCatagory />
        </div>
        <div className="content-product-detail">
          <ContenProductDetail dataProduct={dataProduct} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
