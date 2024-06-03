import React from "react";
import ModalCreateCarts from "./Modals/ModalCreateCarts";
import ModalUpdateCarts from "./Modals/ModalUpdateCarts";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableCarts from "./Modals/TableCarts";
import { FcPlus } from "react-icons/fc";

// import "./ManagerCarts.scss";
const ManagerCarts = () => {
  const [showModalCreateCarts, setShowModalCreateCarts] = useState(false);
  const [showModalUpdateCarts, setShowModalUpdateCarts] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  //   const [listUser, setListUser] = useState([]);

  //   const fetchListUser = async () => {
  //     let dataUser = await getListUser();
  //     if (dataUser && dataUser.errcode === 0) {
  //       setListUser(dataUser.data);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchListUser();
  //   }, []);

  //   const handleClickUpdate = (user) => {
  //     setShowModalUpdateGenres(true);
  //     setDataUpdate(user);
  //   };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Carts</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateCarts(true)}
          >
            <FcPlus />
            Add new carts
          </button>
        </div>
        <ModalCreateCarts
          show={showModalCreateCarts}
          setShow={setShowModalCreateCarts}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdateCarts
          show={showModalUpdateCarts}
          setShow={setShowModalUpdateCarts}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableCarts
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerCarts;
