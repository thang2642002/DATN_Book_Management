import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
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
          <MenuItem> Thông tin tài khoản </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideBarInfoUser;
