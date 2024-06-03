import React from "react";
import ModalCreatePubliers from "./Modals/ModalCreatePubliers";
import ModalUpdatePubliers from "./Modals/ModalUpdatePubliers";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TablePubliers from "./Modals/TablePubliers";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPubliers.scss";
const ManagerPubliers = () => {
  const [showModalCreatePubliers, setShowModalCreatePubliers] = useState(false);
  const [showModalUpdatePubliers, setShowModalUpdatePubliers] = useState(false);
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
      <div className="title">Manager Genres</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreatePubliers(true)}
          >
            <FcPlus />
            Add new genres
          </button>
        </div>
        <ModalCreatePubliers
          show={showModalCreatePubliers}
          setShow={setShowModalCreatePubliers}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdatePubliers
          show={showModalUpdatePubliers}
          setShow={setShowModalUpdatePubliers}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TablePubliers
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerPubliers;
