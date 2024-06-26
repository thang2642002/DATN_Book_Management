import avatar from "../../../../public/assets/img/avatar.png";
import "./ContentsInfoUser.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import UpdateInfoUser from "../UpdateUser/updateUser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ContentsInfoUser = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState({});
  const user = useSelector((state) => state.user);
  const handleClickUpdate = () => {
    setShow(true);
    setUsers(user);
  };

  return (
    <>
      <div className="content-info-user">
        <div className="content-left">
          <div className="title_info">Thông tin cá nhân</div>
          <div className="info">
            <div className="avatar">
              <img src={user.avatar} alt="avatar" />
            </div>
            <div style={{ display: "block" }}>
              <div className="username">
                Họ tên: <span>{user.username}</span>
              </div>
              <div className="nickname">
                Nick name: <span>{user.username}</span>
              </div>
            </div>
          </div>
          <div className="address">
            Address: <span>{user.address}</span>
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

          <button className="btn btn-primary" onClick={handleClickUpdate}>
            Chỉnh sửa thông tin
          </button>
        </div>
        <div className="content-right">
          <div className="info-more">
            <div className="phone-email">Số điện thoại và Email</div>
            <div className="phone">
              <div className="title-phone">
                <FaPhone className="icon-phone" />
                Số điện thoại
              </div>
              <div className="number-phone">{user.phone}</div>
            </div>
            <div className="email">
              <div className="title-email">
                <MdEmail className="icon-email" />
                Địa chỉ email
              </div>
              <div className="email-address">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
      <UpdateInfoUser show={show} setShow={setShow} users={users} />
    </>
  );
};
export default ContentsInfoUser;
