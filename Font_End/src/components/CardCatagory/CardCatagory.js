import "./CardCatagory.scss";
import { Col } from "react-bootstrap";
import img1 from "../../public/assets/img/cardCatagory/card1.png";
import img2 from "../../public/assets/img/cardCatagory/card2.png";
import img3 from "../../public/assets/img/cardCatagory/card3.png";
import img4 from "../../public/assets/img/cardCatagory/card4.jpg";
import img5 from "../../public/assets/img/cardCatagory/card5.png";
import img6 from "../../public/assets/img/cardCatagory/card6.png";
import img7 from "../../public/assets/img/cardCatagory/card7.jpg";
import img8 from "../../public/assets/img/cardCatagory/card8.jpg";
import img9 from "../../public/assets/img/cardCatagory/card9.png";
import img10 from "../../public/assets/img/cardCatagory/card10.jpg";

const CardCatagory = () => {
  const listCardCatagory = [
    {
      img: img1,
      title: "Bút vẽ trang trí",
    },
    {
      img: img2,
      title: "Quạt Mini",
    },
    {
      img: img3,
      title: "Bút Teen",
    },
    {
      img: img4,
      title: "Đam mỹ",
    },
    {
      img: img5,
      title: "Văn Học",
    },
    {
      img: img6,
      title: "Tâm lý lý kĩ năng",
    },
    {
      img: img7,
      title: "Thiếu nhi",
    },
    {
      img: img8,
      title: "Sức khỏe",
    },
    {
      img: img9,
      title: "Sách ngoại ngữ",
    },
    {
      img: img10,
      title: "Ngoại ngữ",
    },
  ];

  return (
    <>
      <div className="card-catagogy-container">
        {listCardCatagory.map((item) => {
          return (
            <div className="card-catagogy">
              <img src={item.img} alt="" />
              <div className="title-product">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardCatagory;
