import "./NavbarComponents.scss";
import Form from "react-bootstrap/Form";
import { getListGenres } from "../../services/genresService";
import { useEffect, useState } from "react";
import { getPriceProduct } from "../../services/BookService";
const NavbarComponent = (props) => {
  const { setCheckGenres, setDataProduct } = props;
  const [dataGenres, setDataGenres] = useState([]);
  const getAllGenres = async () => {
    const dataGenres = await getListGenres();
    setDataGenres(dataGenres.data);
  };

  const checkPriceProduct = async (e) => {
    const dataPriceProduct = await getPriceProduct(
      e.target.getAttribute("valuemin"),
      e.target.getAttribute("valuemax")
    );
    setDataProduct(dataPriceProduct.data);
  };
  useEffect(() => {
    getAllGenres();
  }, []);
  return (
    <div className="navbar-conatainer">
      <div className="list-catagory-product">
        <div className="tile-product">Nhóm sản phẩm</div>
        <div className="title-genres" onClick={() => setCheckGenres(0)}>
          Tất cả sản phẩm
        </div>
        {dataGenres &&
          dataGenres.map((genres, index) => {
            return (
              <div
                key={index + 1}
                className="title-genres"
                onClick={() => setCheckGenres(genres.id)}
              >
                {genres?.genres_name}
              </div>
            );
          })}
      </div>
      <div className="list-price">
        <div className="tile-product">Giá</div>
        <div className="price-product">
          <Form.Check
            inline
            label="Dưới 50000"
            name="paypall"
            type="radio"
            valuemax="50000"
            id="1"
            className="check-radio"
            onChange={checkPriceProduct}
          />

          <Form.Check
            inline
            label="50000-200000"
            name="paypall"
            type="radio"
            valuemax="200000"
            valuemin="50000"
            id="1"
            className="check-radio"
            onChange={checkPriceProduct}
          />
          <Form.Check
            inline
            label="200000-500000"
            name="paypall"
            type="radio"
            valuemax="500000"
            valuemin="200000"
            id="1"
            className="check-radio"
            onChange={checkPriceProduct}
          />
          <Form.Check
            inline
            label="Trên 500000"
            name="paypall"
            type="radio"
            valuemin="500000"
            id="1"
            className="check-radio"
            onChange={checkPriceProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
