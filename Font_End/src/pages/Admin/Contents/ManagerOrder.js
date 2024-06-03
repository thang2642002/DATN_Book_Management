import React from "react";
import ModalCreateOrder from "./Modals/ModalCreateOrder";
import ModalUpdateOrder from "./Modals/ModalUpdateOrder";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableOrder from "./Modals/TableOrder";
import { FcPlus } from "react-icons/fc";

// import "./ManagerOrder.scss";
const ManagerOrder = () => {
  const [showModalCreateOrder, setShowModalCreateOrder] = useState(false);
  const [showModalUpdateOrder, setShowModalUpdateOrder] = useState(false);
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
      <div className="title">Manager Order</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateOrder(true)}
          >
            <FcPlus />
            Add new order
          </button>
        </div>
        <ModalCreateOrder
          show={showModalCreateOrder}
          setShow={setShowModalCreateOrder}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdateOrder
          show={showModalUpdateOrder}
          setShow={setShowModalUpdateOrder}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableOrder
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerOrder;
