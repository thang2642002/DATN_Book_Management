import { Container } from "react-bootstrap";
import NavCatagory from "./ProductDetailComponet/NavCatagory";
import ContenProductDetail from "./ProductDetailComponet/ContenProductDetail";
import "./ProductDetail.scss";

const ProductDetail = () => {
  return (
    <div className="product-detai-container">
      <Container>
        <div className="nav-product-detail">
          <NavCatagory />
        </div>
        <div className="content-product-detail">
          <ContenProductDetail />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
