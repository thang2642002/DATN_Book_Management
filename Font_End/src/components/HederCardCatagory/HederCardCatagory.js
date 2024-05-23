import iconMenu from "../../public/assets/img/icons/icon-menu.svg";
import "./HederCardCatagory.scss";
const HederCardCatagory = () => {
  return (
    <div className="catagory-product-header">
      <div className="icon-menu">
        <img src={iconMenu} alt="icon-menu" />
      </div>
      <div className="title-catagory">Danh mục sản phẩm</div>
    </div>
  );
};

export default HederCardCatagory;
