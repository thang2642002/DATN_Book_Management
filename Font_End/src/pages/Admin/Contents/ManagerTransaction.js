import React from "react";
import ModalCreateTransaction from "./Modals/ModalCreateTransaction";
import ModalUpdateTransaction from "./Modals/ModalUpdateTransaction";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableTransaction from "./Modals/TableTransaction";
import { FcPlus } from "react-icons/fc";

// import "./ManagerTransaction.scss";
const ManagerTransaction = () => {
  const [ShowModalCreateTransaction, setShowModalCreateTransaction] =
    useState(false);
  const [showModalUpdateTransaction, setShowModalUpdateTransaction] =
    useState(false);
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
      <div className="title">Manager Transaction</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateTransaction(true)}
          >
            <FcPlus />
            Add New Transaction
          </button>
        </div>
        <ModalCreateTransaction
          show={ShowModalCreateTransaction}
          setShow={setShowModalCreateTransaction}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdateTransaction
          show={showModalUpdateTransaction}
          setShow={setShowModalUpdateTransaction}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableTransaction
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerTransaction;
