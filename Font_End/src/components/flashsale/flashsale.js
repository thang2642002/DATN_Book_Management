import flashsaleImg from "../../public/assets/img/label-flashsale.svg";
import { Row, Col } from "react-bootstrap";
import CartFlashsale from "../../components/CartFlashsale/CartFlashsale";
import { getListBooks } from "../../services/BookService";
import "./flashsale.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const Flashsale = () => {
  const [listProduct, setListProduct] = useState([]);

  const fetchProduct = async () => {
    const product = await getListBooks();
    setListProduct(product.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="flashsale-container">
      <div className="flashsale_header">
        <div className="logo-img">
          <img src={flashsaleImg} alt="logo- flashsale" />
        </div>
        <div className="flashsale-timer">
          <div className="flashsale-countdown-label">
            <span>Kết thúc trong</span>
          </div>
          <div className="flashsale-countdown-normal">
            <span className="flashsale-countdown-number">00</span>
            <span>:</span>
            <span className="flashsale-countdown-number">00</span>
            <span>:</span>
            <span className="flashsale-countdown-number">00</span>
          </div>
        </div>
      </div>
      <div className="flashsale_content">
        <Slider {...settings}>
          {listProduct.map((items, index) => {
            if (
              Math.round(
                ((items?.sales - items?.price) / items?.sales) * 100
              ) >= 50
            ) {
              return (
                <div key={index}>
                  <CartFlashsale items={items} />
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Flashsale;
