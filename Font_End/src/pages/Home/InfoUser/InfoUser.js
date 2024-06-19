import { Container, Row, Col } from "react-bootstrap";
import SideBarInfoUser from "./SideBarInfoUser/SideBarInfoUser";
import { Outlet } from "react-router-dom";

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
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoUser;
