import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Banner.scss";
import banner1 from "../../public/assets/img/banner/banner1.jpg";
import banner2 from "../../public/assets/img/banner/banner2.jpg";
import banner3 from "../../public/assets/img/banner/banner3.png";
import banner4 from "../../public/assets/img/banner/banner4.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <Row>
        <Col lg={3}>
          <img src={banner1} alt="banner1" />
        </Col>
        <Col lg={3}>
          <img src={banner2} alt="banner1" />
        </Col>
        <Col lg={3}>
          <img src={banner3} alt="banner1" />
        </Col>
        <Col lg={3}>
          <img src={banner4} alt="banner1" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
