import React from "react";
import Slider from "react-slick";
import catagory1 from "../../public/assets/img/catagory/catagory1.png";
import catagory2 from "../../public/assets/img/catagory/catagory2.png";
import catagory3 from "../../public/assets/img/catagory/catagory3.png";
import catagory4 from "../../public/assets/img/catagory/catagory4.png";
import catagory5 from "../../public/assets/img/catagory/catagory5.png";
import catagory6 from "../../public/assets/img/catagory/catagory6.png";
import catagory7 from "../../public/assets/img/catagory/catagory7.png";
import catagory8 from "../../public/assets/img/catagory/catagory8.png";
import catagory9 from "../../public/assets/img/catagory/catagory9.png";
import catagory10 from "../../public/assets/img/catagory/catagory10.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Catagory.scss";
import useWindowSize from "../../windowSize";

const Catagory = () => {
  const name_catagory = [
    { title: "DDay 05/05", img: catagory1 },
    { title: "Văn Học", img: catagory2 },
    { title: "Hot Wheels", img: catagory3 },
    { title: "Sản Phẩm Được Trợ Giá", img: catagory4 },
    { title: "Manga", img: catagory5 },
    { title: "Flash Sale", img: catagory6 },
    { title: "Mã Giảm Giá", img: catagory7 },
    { title: "Đồ Chơi", img: catagory8 },
    { title: "Phiên Chợ ", img: catagory9 },
    { title: "Sản Phẩm mới", img: catagory10 },
  ];

  const settings = {
    dots: true,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const size = useWindowSize();

  return (
    <div className="catagory-container">
      {size.width < 1024 ? (
        <Slider {...settings}>
          {name_catagory.map((item, index) => (
            <Link key={index}>
              <div className="catagory-item">
                <div className="img-catagory">
                  <img src={item.img} alt="catagory" />
                </div>
                <div>
                  <p className="title-catagory">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <div className="catagory-content">
          {name_catagory.map((item, index) => (
            <Link key={index}>
              <div className="catagory-item">
                <div>
                  <img src={item.img} alt="catagory" />
                </div>
                <div>
                  <p className="title-catagory">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catagory;
