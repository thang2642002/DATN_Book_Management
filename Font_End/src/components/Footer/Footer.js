import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.scss"; // SCSS cho footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3 className="footer-title">Thông tin liên hệ</h3>
            <p>
              Địa chỉ: 123 Đường Lê Văn Viêt, Quận 9 , Thành phố Hồ Chí Minh,
            </p>
            <p>Email: bookstore@example.com</p>
            <p>Số điện thoại: +123 456 7890</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <h3 className="footer-title">Liên kết nhanh</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/products">Sản phẩm</a>
              </li>
              <li>
                <a href="/about">Về chúng tôi</a>
              </li>
              <li>
                <a href="/contact">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <h3 className="footer-title">Theo dõi chúng tôi</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/t.2TDevIT/" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Công ty mua bán sách. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
