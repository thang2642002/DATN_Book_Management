import Slider from "react-slick";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { recommendation } from "../../../services/BookService";
import "./RecommendationProduct.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RecommendationProduct = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const id = useParams();

  const [dataRecomendation, setDataRecomendation] = useState([]);

  const getRecommendation = async () => {
    const data = await recommendation(id?.id);
    setDataRecomendation(data.data);
  };
  console.log("dataRecomendation", dataRecomendation);

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div className="recommendation-container">
      <div className="conaten-recommendation">
        <div className="title">Đề Xuất Sản Phẩm</div>
        <div className="content-product">
          <div className="slider-container">
            <Slider {...settings}>
              {dataRecomendation &&
                dataRecomendation.map((item, index) => {
                  return (
                    <div key={index + 1}>
                      <div className="item-product">
                        <div className="img-product">
                          <img src={item?.img_book} alt="ảnh sản phẩm" />
                        </div>
                        <div className="title-product">{item?.title}</div>
                        <div className="price-sales">
                          <div className="price">{item?.price}</div>
                          <div className="sales">{item?.sales}</div>
                        </div>
                        <div className="genres-author">
                          <div className="genres">
                            {item?.Genre?.genres_name}
                          </div>
                          <div className="author">
                            {item?.Author?.author_name}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationProduct;
