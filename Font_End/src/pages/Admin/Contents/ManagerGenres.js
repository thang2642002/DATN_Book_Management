import React from "react";
import ModalCreateGenres from "./Modals/ModalCreateGenres";
import ModalUpdateGenres from "./Modals/ModalUpdateGenres";
import { useEffect, useState } from "react";
import { getListGenres } from "../../../services/genresService";
import TableGenres from "./Modals/TableGenres";
import { FcPlus } from "react-icons/fc";

import "./ManagerGenres.scss";
const ManagerGenres = () => {
  const [showModalCreateGenres, setShowModalCreateGenres] = useState(false);
  const [showModalUpdateGenres, setShowModalUpdateGenres] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  const [listGenres, setListGenres] = useState([]);

  const fetchListGenres = async () => {
    let dataGenres = await getListGenres();
    if (dataGenres && dataGenres.errcode === 0) {
      setListGenres(dataGenres.data);
    }
  };

  useEffect(() => {
    fetchListGenres();
  }, []);

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
          fetchListGenres={fetchListGenres}
        />
        <ModalUpdateGenres
          show={showModalUpdateGenres}
          setShow={setShowModalUpdateGenres}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableGenres
            listGenres={listGenres}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerGenres;
