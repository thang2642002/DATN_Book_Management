import { Container, Row, Col } from "react-bootstrap";
import SideBarInfoUser from "./SideBarInfoUser/SideBarInfoUser";
import { Outlet } from "react-router-dom";
import ContentsInfoUser from "./ContentsInfoUser/ContentsInfoUser";
import OrderDetails from "../OrderDetails/OrderDetails";

const InfoUser = () => {
  return (
    <div
      className="info-user-container"
      style={{ backgroundColor: "#f5f5fa", height: "100vh" }}
    >
      <Container>
        <Row>
          <Col lg={3}>
            <SideBarInfoUser />
          </Col>
          <Col lg={9}>
            <ContentsInfoUser />
            <OrderDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoUser;
