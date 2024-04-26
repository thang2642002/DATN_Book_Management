import Sliders from "../../components/Slider/slider";
import Container from "react-bootstrap/Container";
import Banner from "../../components/bannerHome/Banner";
import Catagory from "../../components/Catagory/Catagory";
const Home = () => {
  return (
    <div className="home-container">
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <Container>
          <Sliders />
          <Banner />
          <Catagory />
        </Container>
        <Container>
          <div
            style={{ backgroundColor: "blue", width: "100vh", height: "100px" }}
          ></div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
