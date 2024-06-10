import { Container, Row, Col } from "react-bootstrap";
// import SideBarCarts from "./SideBarCarts/SideBarCarts";
import ContentsCarts from "./ContentsCarts/ContentsCarts";

const Carts = () => {
  return (
    <div
      className="carts-container"
      style={{ backgroundColor: "#f5f5fa", height: "100vh" }}
    >
      <Container>
        <ContentsCarts />
      </Container>
    </div>
  );
};

export default Carts;
