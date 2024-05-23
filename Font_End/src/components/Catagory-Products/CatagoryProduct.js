import HederCardCatagory from "../HederCardCatagory/HederCardCatagory";
import CardCatagory from "../CardCatagory/CardCatagory";
import "./CatagoryProduct.scss";
const CatagoryProduct = () => {
  return (
    <div className="catagory-product-container">
      <HederCardCatagory />
      <CardCatagory />
    </div>
  );
};

export default CatagoryProduct;
