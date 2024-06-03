import React from "react";
import ModalCreateAuthor from "./Modals/ModalCreateAuthor";
import ModalUpdateAuthor from "./Modals/ModalUpdateAuthor";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TableAuthor from "./Modals/TableGenres";
import { FcPlus } from "react-icons/fc";

// import "./ManagerAuthor.scss";
const ManagerAuthor = () => {
  const [showModalCreateAuthor, setShowModalCreateAuthor] = useState(false);
  const [showModalUpdateAuthor, setShowModalUpdateAuthor] = useState(false);
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
            onClick={() => setShowModalCreateAuthor(true)}
          >
            <FcPlus />
            Add new genres
          </button>
        </div>
        <ModalCreateAuthor
          show={showModalCreateAuthor}
          setShow={setShowModalCreateAuthor}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdateAuthor
          show={showModalUpdateAuthor}
          setShow={setShowModalUpdateAuthor}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableAuthor
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerAuthor;
