import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Router, Route, BrowserRouter, Link } from "react-router-dom";
import ContentsInfoUser from "../ContentsInfoUser/ContentsInfoUser";
import OrderDetails from "../../OrderDetails/OrderDetails";
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
          <BrowserRouter>
            <Router>
              <Route Component={ContentsInfoUser} path="/info-user" />
              <Route Component={OrderDetails} path="order-details" />
            </Router>
          </BrowserRouter>
          <MenuItem>
            <Link to="/info-user">Thông tin tài khoản</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/order-details">Chi tiết đơn hàng </Link>{" "}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideBarInfoUser;
