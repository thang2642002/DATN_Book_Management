import iconMenu from "../../public/assets/img/icons/icon-menu.svg";
import "./HederCardCatagory.scss";
import { useNavigate } from "react-router-dom";
const HederCardCatagory = () => {
  const navigate = useNavigate();
  const handleMore = () => {
    navigate("/type");
  };
  return (
    <div className="catagory-product-header">
      <div className="header-catarory">
        <div className="icon-menu">
          <img src={iconMenu} alt="icon-menu" />
        </div>
        <div className="title-catagory">Danh mục sản phẩm</div>
      </div>
      <div className="more-catagory" onClick={handleMore}>
        Xem thêm{" "}
      </div>
    </div>
  );
};

export default HederCardCatagory;
