import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useRoutes } from "react-router-dom"; // Import useRoutes instead of Routes
import ContentsInfoUser from "../ContentsInfoUser/ContentsInfoUser";
import OrderDetails from "../../OrderDetails/OrderDetails";
import InfoUser from "../InfoUser";
import avatar from "../../../../public/assets/img/avatar.png";
import "./SideBarInfoUser.scss";

const SideBarInfoUser = () => {
  return (
    <div className="sidebar-info-user">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>
            <div className="info">
              <img src={avatar} alt="avatar" />
              <div className="info-user">
                <div className="title-account">Tên tài khoản</div>
                <div className="username-user">Thang tran</div>
              </div>
            </div>
          </MenuItem>
          <MenuItem>
            <Link to="/">Thông tin tài khoản</Link>
          </MenuItem>
          <MenuItem>
            <Link to="">Chi tiết đơn hàng</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideBarInfoUser;
