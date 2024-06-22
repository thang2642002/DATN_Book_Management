import "./CardCatagory.scss";
import { getListGenres } from "../../services/genresService";
import img1 from "../../public/assets/img/cardCatagory/card1.png";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardCatagory = () => {
  const navigate = useNavigate();
  const [listCardCatagory, setListCardCatagory] = useState([]);
  const fetchListGenres = async () => {
    const dataGenres = await getListGenres();
    setListCardCatagory(dataGenres.data);
  };

  const handleCtagory = (id) => {
    navigate("/type", { state: id });
  };

  useEffect(() => {
    fetchListGenres();
  }, []);

  return (
    <>
      <div className="card-catagogy-container">
        {listCardCatagory &&
          listCardCatagory.map((genres, index) => {
            return (
              <div
                className="card-catagogy"
                key={index + 1}
                onClick={() => handleCtagory(genres.id)}
              >
                {/*<img src={img1} alt="" />*/}
                <div className="title-product">{genres.genres_name}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardCatagory;
