import "./NavbarComponents.scss";
import { Checkbox } from "antd";
import { getListGenres } from "../../services/genresService";
import { useEffect, useState } from "react";
const NavbarComponent = () => {
  const [dataGenres, setDataGenres] = useState([]);
  const getAllGenres = async () => {
    const dataGenres = await getListGenres();
    setDataGenres(dataGenres.data);
  };
  console.log("dataGenres", dataGenres);

  useEffect(() => {
    getAllGenres();
  }, []);
  const onChange = () => {};
  const rederConten = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <div className="catagory-name">{option}</div>;
        });
      case "checkbox":
        return options.map((option) => {
          return (
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </Checkbox.Group>
          );
        });

      default:
        return {};
    }
  };
  return (
    <div className="navbar-conatainer">
      <div className="list-catagory-product">
        <div className="tile-product">Nhóm sản phẩm</div>
        {dataGenres &&
          dataGenres.map((genres, index) => {
            console.log("genres", genres);
            return <div key={index + 1} className="title-genres">{genres?.genres_name}</div>;
          })}
      </div>
      <div className="list-price">
        <div className="tile-product">Giá</div>
        <div className="price-product">
          {rederConten("checkbox", [
            { value: "0-150.000đ", label: "0-150.000đ" },
            { value: "150.000đ - 300.000đ", label: "150.000đ - 300.000đ" },
            { value: "300.000đ - 500.000đ", label: "300.000đ - 500.000đ" },
            { value: "500.000đ - 700.000đ", label: "500.000đ - 700.000đ" },
            { value: "700.000đ - Trở lên", label: "700.000đ - Trở lên" },
          ])}
        </div>
      </div>

      <div className="supplier-product">
        <div className="tile-supplier">Nhà cung cấp</div>
        <div className="supplier-name">
          {rederConten("checkbox", [
            { value: "0-150.000đ", label: "0-150.000đ" },
          ])}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
