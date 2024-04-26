import Slider from "react-slick";
import slider1 from "../../public/assets/img/slider1.jpg";
import slider2 from "../../public/assets/img/slider2.jpg";
import slider3 from "../../public/assets/img/slider3.jpg";
import slider4 from "../../public/assets/img/slider4.jpg";
import slider5 from "../../public/assets/img/slider5.jpg";
import "./slider.scss";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

let img = {
  img1: slider1,
  img2: slider2,
  img3: slider3,
  img4: slider4,
  img5: slider5,
};
const SimpleSlider = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img.img1} alt="slider1" />
        </div>
        <div>
          <img src={img.img2} alt="slider2" />
        </div>
        <div>
          <img src={img.img3} alt="slider3" />
        </div>
        <div>
          <img src={img.img4} alt="slider4" />
        </div>
        <div>
          <img src={img.img5} alt="slider5" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
