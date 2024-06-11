import avatar from "../../../../public/assets/img/avatar.png";
import "./ContentsInfoUser.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const ContentsInfoUser = () => {
  return (
    <div className="content-info-user">
      <div className="content-left">
        <div className="title_info">Thông tin cá nhân</div>
        <div className="info">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div style={{ display: "block" }}>
            <div className="username">
              Họ tên: <span>Trần Thắng</span>
            </div>
            <div className="nickname">
              Nick name: <span>Trần Thắng</span>
            </div>
          </div>
        </div>
        <div className="address">
          Address: <span>Bình định</span>
        </div>
        <div className="sex">
          Giới tính
          <span>
            <div className="checkbox-container">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Nam
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Nữ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Khác
                </label>
              </div>
            </div>
          </span>
        </div>

        <button className="btn btn-primary">Chỉnh sửa thông tin</button>
      </div>
      <div className="content-right">
        <div className="info-more">
          <div className="phone-email">Số điện thoại và Email</div>
          <div className="phone">
            <div className="title-phone">
              <FaPhone className="icon-phone" />
              Số điện thoại
            </div>
            <div className="number-phone">0342925377</div>
          </div>
          <div className="email">
            <div className="title-email">
              <MdEmail className="icon-email" />
              Địa chỉ email
            </div>
            <div className="email-address">tranthang0369@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentsInfoUser;
