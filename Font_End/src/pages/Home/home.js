import Sliders from "../../components/Slider/slider";
import Container from "react-bootstrap/Container";
import Banner from "../../components/bannerHome/Banner";
import Catagory from "../../components/Catagory/Catagory";
import Flashsale from "../../components/flashsale/flashsale";
import CatagoryProduct from "../../components/Catagory-Products/CatagoryProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import NavbarComponent from "../../components/NavbarComponents/NavbarComponent";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <Container>
          <Sliders />
          <Banner />
          <Catagory />
        </Container>
        <div className="flashsale-slider">
          <Container>
            <Flashsale />
          </Container>
        </div>

        <div className="content-container" style={{ paddingBottom: "10px" }}>
          <Container>
            <CatagoryProduct />
            <ListProduct />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
