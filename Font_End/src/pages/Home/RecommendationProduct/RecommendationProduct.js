import Slider from "react-slick";
import img from "../../../public/assets/img/9d3cedd64b6b23004040abefb6d0949e.png.webp";
import { recommendation } from "../../../services/BookService";
import "./RecommendationProduct.scss";
import { useEffect, useState } from "react";
const RecommendationProduct = (props) => {
  const { dataProduct } = props;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [dataRecomendation, setDataRecomendation] = useState([]);

  const getRecommendation = async () => {
    const data = await recommendation(dataProduct?.data?.id);
    setDataRecomendation(data?.data);
  };
  console.log("dataProduct", dataProduct?.data?.id);
  console.log("dataRecomendation", dataRecomendation?.data);

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
              {/** {dataRecomendation &&
                dataRecomendation.map((item, index) => {
                  console.log("item", item);
                  return (
                    <div key={index + 1}>
                      <div className="item-product">
                        <div className="img-product">
                          <img src={img} alt="ảnh sản phẩm" />
                        </div>
                        <div className="title-product">
                          Đối Thoại Với Những Người Tiên Phong
                        </div>
                        <div className="price-sales">
                          <div className="price">100000đ</div>
                          <div className="sales">1000đ</div>
                        </div>
                        <div className="genres-author">
                          <div className="genres">Thể loại</div>
                          <div className="author">Tác Giả</div>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationProduct;
