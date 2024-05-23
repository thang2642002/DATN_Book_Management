import "./ContenProductDetail.scss";
import { Row, Col } from "react-bootstrap";
import { Image } from "antd";

import {
  StarFilled,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import img1 from "../../../../public/assets/img/img-productDetail/img1.jpg";
const ContenProductDetail = () => {
  const onChange = () => {};
  return (
    <div className="product-detail-conten">
      <Row>
        <Col lg={4} className="pd-0">
          <div className="img-product">
            <img src={img1} alt="anh" />
          </div>
          <div className="img-preview">
            <Row>
              <Col lg={3} className="pd-0">
                <Image src={img1} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={img1} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={img1} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={img1} alt="anh" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={8}>
          <div className="info-detailproduct">
            <div className="title-product">
              One Piece - Tập 98: “Phút Huy Hoàng Của Những Trung Thần”
            </div>
            <div>
              <StarFilled
                style={{
                  fontSize: "15px",
                  color: "rgb(253, 216, 54)",
                  margin: "0 2px",
                }}
              />
              <StarFilled
                style={{
                  fontSize: "15px",
                  color: "rgb(253, 216, 54)",
                  margin: "0 2px",
                }}
              />
              <StarFilled
                style={{
                  fontSize: "15px",
                  color: "rgb(253, 216, 54)",
                  margin: "0 2px",
                }}
              />
              <StarFilled
                style={{
                  fontSize: "15px",
                  color: "rgb(253, 216, 54)",
                  margin: "0 2px",
                }}
              />
              <span className="assess-product">
                ( Xem và đánh giá ) | Đã bán 100
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <div className="suppliers-product">
                Nhà cung cấp: <span className="name-suppliers">Kim Đồng</span>
              </div>
              <div className="author-product">
                Tác giả <span className="name-author">Kim Đồng</span>
              </div>
            </div>
            <div className="price-product">
              <div className="price">95.000 đ</div>
              <span className="original-price">100.000 đ</span>
              <span className="discount-value">5%</span>
            </div>

            <div className="delivery-address">
              <span>Giao đến</span>
              <div className="address">Quận 1 Thành phố Hồ Chí Minh</div>
              <div className="change-address">Thay đổi địa chỉ</div>
            </div>
            <div className="quantity-product">
              <span>Số lượng</span>
              <div className="count-product">
                <span className="plus">
                  <PlusOutlined />
                </span>
                <input
                  value={3}
                  style={{
                    width: "50px",
                    border: "1px solid #ccc",
                    paddingLeft: "15px",
                  }}
                />
                <span className="minus">
                  <MinusOutlined />
                </span>
              </div>
            </div>

            <div className="purchase">
              <div className="add-to-cart">
                <ShoppingCartOutlined
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
                Thêm vào giỏ hàng
              </div>
              <div className="reservation">Đặt trước</div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="info_product">
        <div className="title-info-product"> Thông tin chi tiết sản phẩm</div>
        <div className="content-info-product">
          Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên
          cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có
          thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển,
          phụ phí hàng cồng kềnh,... Hội trưởng Shirogane Miyuki và hội phó
          Shinomiya Kaguya gặp nhau tại Hội Học Sinh của học viện Shuchiin, nơi
          hội tụ của những con người thuộc tầng lớp thượng lưu… Đây là câu
          chuyện tình cảm hài hước mới mẻ về hai thiên tài tuy trong lòng thích
          nhau lắm rồi nhưng vẫn ngày ngày bày mưu tính kế cầm cưa, bắt đối
          phương phải tỏ tình trước. Sau 7 năm rưỡi, cuối cùng câu chuyện cũng
          đi tới hồi kết!! “Chương cuối về Shirogane Kei” “Chương cuối về Shijo
          Maki, Kashiwagi Nagisa và Tanuma Tsubasa” “Chương cuối về Osaragi
          Kobachi” “Chương cuối về Hayasaka Ai” “Chương cuối về Iino Miko và
          Ishigami Yu” “Chương cuối về Fujiwara Chika” cùng “chương cuối” của
          các nhân vật khác! Và điều gì sẽ đón chờ Kaguya và Shiroganetrong lễ
          tốt nghiệp…!? Mã hàng combo-kaguya28-kaguya28db-qt Dự Kiến Có Hàng
          24/05/2024 Ngày Dự Kiến Phát Hành 24/05/2024 Độ Tuổi 17+ Tên Nhà Cung
          Cấp Nhà Xuất Bản Kim Đồng Tác giả Aka Akasaka Người Dịch Dĩ Ninh NXB
          Kim Đồng Năm XB 2024 Ngôn Ngữ Tiếng Việt Kích Thước Bao Bì 18 x 13 x 1
          cm Số trang 216 Hình thức Bìa Mềm Sản phẩm bán chạy nhất Top 100 sản
          phẩm Manga Khác bán chạy của tháng Giá sản phẩm trên Fahasa.com đã bao
          gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình
          thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như
          Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,... Chính
          sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách
          Fahasa trên toàn quốc Kaguya-Sama: Cuộc Chiến Tỏ Tình - Tập 28 Hội
          trưởng Shirogane Miyuki và hội phó Shinomiya Kaguya gặp nhau tại Hội
          Học Sinh của học viện Shuchiin, nơi hội tụ của những con người thuộc
          tầng lớp thượng lưu… Đây là câu chuyện tình cảm hài hước mới mẻ về hai
          thiên tài tuy trong lòng thích nhau lắm rồi nhưng vẫn ngày ngày bày
          mưu tính kế cầm cưa, bắt đối phương phải tỏ tình trước.
        </div>
      </div>
    </div>
  );
};

export default ContenProductDetail;
