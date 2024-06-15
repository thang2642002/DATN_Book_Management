import "./CardCatagory.scss";
import { getListGenres } from "../../services/genresService";
import img1 from "../../public/assets/img/cardCatagory/card1.png";
import { useState } from "react";
import { useEffect } from "react";

const CardCatagory = () => {
  const [listCardCatagory, setListCardCatagory] = useState([]);
  const fetchListGenres = async () => {
    const dataGenres = await getListGenres();
    setListCardCatagory(dataGenres.data);
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
              <div className="card-catagogy" key={index + 1}>
                <img src={img1} alt="" />
                <div className="title-product">{genres.genres_name}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CardCatagory;
