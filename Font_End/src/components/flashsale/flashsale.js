import flashsaleImg from "../../public/assets/img/label-flashsale.svg";
import { Row, Col } from "react-bootstrap";
import CartFlashsale from "../../components/CartFlashsale/CartFlashsale";
import "./flashsale.scss";
const Flashsale = () => {
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
        <Row>
          <Col lg={3}>
            <CartFlashsale />
          </Col>

          <Col lg={3}>
            <CartFlashsale />
          </Col>
          <Col lg={3}>
            <CartFlashsale />
          </Col>
          <Col lg={3}>
            <CartFlashsale />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Flashsale;
