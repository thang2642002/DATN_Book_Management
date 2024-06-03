import React from "react";
import ModalCreateGenres from "./Modals/ModalCreateGenres";
import ModalUpdateGenres from "./Modals/ModalUpdateGenres";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableGenres from "./Modals/TableGenres";
import { FcPlus } from "react-icons/fc";

import "./ManagerGenres.scss";
const ManagerGenres = () => {
  const [showModalCreateGenres, setShowModalCreateGenres] = useState(false);
  const [showModalUpdateGenres, setShowModalUpdateGenres] = useState(false);
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
            onClick={() => setShowModalCreateGenres(true)}
          >
            <FcPlus />
            Add new genres
          </button>
        </div>
        <ModalCreateGenres
          show={showModalCreateGenres}
          setShow={setShowModalCreateGenres}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdateGenres
          show={showModalUpdateGenres}
          setShow={setShowModalUpdateGenres}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableGenres
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerGenres;
