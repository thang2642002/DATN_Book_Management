import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import { getListGenres } from "../../services/genresService";
import "./CardCatagory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "../../windowSize"; // Custom hook for getting window size

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

  const size = useWindowSize();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="card-catagogy-container">
      {size.width < 1024 ? (
        <Slider {...settings}>
          {listCardCatagory &&
            listCardCatagory.map((genres, index) => (
              <div key={index} onClick={() => handleCtagory(genres.id)}>
                <div className="card-catagogy">
                  <img
                    variant="top"
                    src={genres.img_genres}
                    alt={genres.genres_name}
                  />
                  <div>
                    <div className="title-product">{genres.genres_name}</div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      ) : (
        <Row>
          {listCardCatagory &&
            listCardCatagory.map((genres, index) => (
              <Col key={index} xs={6} md={4} lg={2}>
                <div onClick={() => handleCtagory(genres.id)}>
                  <div className="card-catagogy">
                    <img
                      variant="top"
                      src={genres.img_genres}
                      alt={genres.genres_name}
                    />
                    <div>
                      <div className="title-product">{genres.genres_name}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default CardCatagory;
