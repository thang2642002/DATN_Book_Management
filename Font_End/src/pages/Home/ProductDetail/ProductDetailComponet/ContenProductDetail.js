import "./ContenProductDetail.scss";
import { Row, Col } from "react-bootstrap";
import { Image } from "antd";
import ReactHtmlParser from "react-html-parser";
import { createCarts } from "../../../../services/cartsService";
import { useNavigate } from "react-router-dom";
import RecommendationProduct from "../../RecommendationProduct/RecommendationProduct";
import {
  createReview,
  getListReview,
  deleteReview,
} from "../../../../services/reviewService";
import { ToastContainer, toast } from "react-toastify";
import {
  StarFilled,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import EditReviewProduct from "./EditReviewProduct";
import imguser from "../../../../public/assets/img/avatar.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pushProduct } from "../../../../redux/Slice/productSlice";

const ContenProductDetail = (props) => {
  const { dataProduct } = props;
  const [quantity, setQuantity] = useState(1);
  const [createDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [listReview, setListReview] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [showModalEditReview, setShowModalEditReview] = useState(false);
  const [dataUpdateReview, setDataUpdateReview] = useState({});
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCarts = async () => {
    if (user.id !== "") {
      const addCart = await createCarts(
        user.id,
        createDate,
        quantity,
        dataProduct.data.id
      );

      dispatch(pushProduct(quantity));
      if (addCart && addCart.errcode === 0) {
        toast.success(addCart.message);
        setQuantity(1);
      } else {
        toast.error(addCart.message);
      }
    } else {
      toast.error("vui lòng đăng nhập");
    }
  };

  const buyNow = async () => {
    if (user.id !== "") {
      await createCarts(user.id, createDate, quantity, dataProduct.data.id);
      navigate("/carts");
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };
  const fetchListReview = async () => {
    try {
      const dataListReview = await getListReview();
      const dataReview = dataListReview.data;
      const idproduct = dataProduct?.data?.id;
      console.log("idproduct", idproduct);

      const filteredReviews = dataReview.filter(
        (item) => item.bookId === idproduct
      );
      setListReview(filteredReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const addReview = async () => {
    try {
      const dataReview = await createReview(
        dataProduct.data.id,
        user.id,
        comment
      );

      if (dataReview && dataReview.errcode === 0) {
        toast.success(dataReview.message);
        fetchListReview();
        setComment("");
      } else {
        toast.error(dataReview.message);
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleDeleteReview = async (review) => {
    const dataDeleteReview = await deleteReview(review.id);
    if (dataDeleteReview && dataDeleteReview.errcode === 0) {
      toast.success(dataDeleteReview.message);
      fetchListReview();
    } else {
      toast.success(dataDeleteReview.message);
    }
  };

  const handleShowModalEditReview = (review) => {
    setShowModalEditReview(true);
    setDataUpdateReview(review);
  };

  useEffect(() => {
    fetchListReview();
  }, [dataProduct]);

  return (
    <div className="product-detail-conten">
      <Row>
        <Col lg={4} className="pd-0">
          <div className="img-product">
            <img src={dataProduct?.data?.img_book} alt="anh" />
          </div>
          <div className="img-preview">
            <Row>
              <Col lg={3} className="pd-0">
                <Image src={dataProduct?.data?.img_book} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={dataProduct?.data?.img_book} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={dataProduct?.data?.img_book} alt="anh" />
              </Col>
              <Col lg={3} className="pd-0">
                <Image src={dataProduct?.data?.img_book} alt="anh" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={8}>
          <div className="info-detailproduct">
            <div className="title-product">{dataProduct?.data?.title}</div>
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
                ( Xem và đánh giá ) | Đã bán {dataProduct?.data?.sales}
              </span>
            </div>
            <div style={{ display: "flex" }} className="supllier-author">
              <div className="suppliers-product">
                Nhà cung cấp:
                <span className="name-suppliers">
                  {dataProduct?.data?.Supplier?.suppliers_name}
                </span>
              </div>
              <div className="author-product">
                Tác giả
                <span className="name-author">
                  {dataProduct?.data?.Author?.author_name}
                </span>
              </div>
            </div>
            <div className="price-product">
              <div className="price">{dataProduct?.data?.price}</div>
              <span className="original-price">
                {dataProduct?.data?.sales} đ
              </span>
              <span className="discount-value">
                {Math.round(
                  ((dataProduct?.data?.sales - dataProduct?.data?.price) /
                    dataProduct?.data?.sales) *
                    100
                )}
                %
              </span>
            </div>

            <div className="delivery-address">
              <span>Địa chỉ giao hàng</span>
              <div className="address">{user.address}</div>
            </div>
            <div className="quantity-product">
              <span>Số lượng</span>
              <div className="count-product">
                <span
                  className="minus"
                  onClick={() =>
                    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
                  }
                >
                  <MinusOutlined />
                </span>
                <input
                  value={quantity}
                  style={{
                    width: "50px",
                    border: "1px solid #ccc",
                    paddingLeft: "15px",
                  }}
                />
                <span
                  className="plus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusOutlined />
                </span>
              </div>
            </div>

            <div className="purchase">
              <div className="add-to-cart" onClick={handleAddCarts}>
                <ShoppingCartOutlined
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
                Thêm vào giỏ hàng
              </div>
              <div className="reservation" onClick={buyNow}>
                Mua ngay
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="info_product">
        <div className="title-info-product "> Thông tin chi tiết sản phẩm</div>
        <div
          className={`content-info-product ${
            showDescription ? "show-full" : ""
          }`}
        >
          {ReactHtmlParser(dataProduct?.data?.description)}
        </div>
        <div className="custom-btn">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Thu gọn" : "Xem thêm "}
          </button>
        </div>
      </div>

      <RecommendationProduct dataProduct={dataProduct} />

      <div className="review-container">
        <div className="title">Đánh giá sản phẩm</div>
        <div className="input-comment">
          <img src={imguser} alt="img" />
          <input value={comment} onChange={(e) => setComment(e.target.value)} />
          <button type="button" className="btn btn-primary" onClick={addReview}>
            Thêm
          </button>
        </div>
        <div className="title-view-comment">Lượt đánh giá</div>
        {listReview.map((review, index) => {
          return (
            <div key={index + 1}>
              <div key={review.id} className="content-comment">
                <div className="img-user">
                  <img src={imguser} alt="img" />
                </div>
                <div className="content-user">
                  <div className="name-user">{review?.User?.username}</div>
                  <div className="comment">{review?.comment}</div>
                </div>
              </div>
              {review.userId === user.id && (
                <div className="edit-delete">
                  <div
                    className="edit"
                    onClick={() => handleShowModalEditReview(review)}
                  >
                    Chỉnh sửa
                  </div>
                  <div
                    className="delete"
                    onClick={() => handleDeleteReview(review)}
                  >
                    Xóa
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <EditReviewProduct
        show={showModalEditReview}
        setShow={setShowModalEditReview}
        dataUpdateReview={dataUpdateReview}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContenProductDetail;
