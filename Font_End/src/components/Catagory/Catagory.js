import catagory1 from "../../public/assets/img/catagory/catagory1.png";
import catagory2 from "../../public/assets/img/catagory/catagory2.png";
import catagory3 from "../../public/assets/img/catagory/catagory3.png";
import catagory4 from "../../public/assets/img/catagory/catagory4.png";
import catagory5 from "../../public/assets/img/catagory/catagory5.png";
import catagory6 from "../../public/assets/img/catagory/catagory6.png";
import catagory7 from "../../public/assets/img/catagory/catagory7.png";
import catagory8 from "../../public/assets/img/catagory/catagory8.png";
import catagory9 from "../../public/assets/img/catagory/catagory9.png";
import catagory10 from "../../public/assets/img/catagory/catagory10.png";
import { Link } from "react-router-dom";
import "./Catagory.scss";
const Catagory = () => {
  const name_catagory = [
    { title: "DDay 05/05", img: catagory1 },
    { title: "Văn Học", img: catagory2 },
    { title: "Hot Wheels", img: catagory3 },
    { title: "Sản Phẩm Được Trợ Giá", img: catagory4 },
    { title: "Manga", img: catagory5 },
    { title: "Flash Sale", img: catagory6 },
    { title: "Mã Giảm Giá", img: catagory7 },
    { title: "Đồ Chơi", img: catagory8 },
    { title: "Phiên Chợ ", img: catagory9 },
    { title: "Sản Phẩm mới", img: catagory10 },
  ];
  return (
    <div className="catagory-container">
      <div className="catagory-content">
        {name_catagory.map((item, index) => {
          return (
            <Link>
              <div className="catagory-item" key={index + 1}>
                <div>
                  <img src={item.img} alt="catagory" />
                </div>
                <div>
                  <p className="title-catagory">{item.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Catagory;
