import React from "react";
import ModalCreateUser from "./Modals/ModalCreateUser";
import ModalUpdateUser from "./Modals/ModalUpdateUser";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableUser from "./Modals/TableUser";
import { FcPlus } from "react-icons/fc";

import "./ManagerUser.scss";
const ManagerUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);

  const fetchListUser = async () => {
    let dataUser = await getListUser();
    if (dataUser && dataUser.errcode === 0) {
      setListUser(dataUser.data);
    }
  };

  useEffect(() => {
    fetchListUser();
  }, []);

  const handleClickUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          fetchListUser={fetchListUser}
          dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableUser
            listUser={listUser}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
