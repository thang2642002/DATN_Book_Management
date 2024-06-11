import React from "react";
import ModalCreateGenres from "./Modals/ModalCreateGenres";
import ModalDeleteGenres from "./Modals/ModalDeleteGenres";
import ModalUpdateGenres from "./Modals/ModalUpdateGenres";
import { useEffect, useState } from "react";
import { getListGenres } from "../../../services/genresService";
import TableGenres from "./Modals/TableGenres";
import { FcPlus } from "react-icons/fc";

import "./ManagerGenres.scss";
const ManagerGenres = () => {
  const [showModalCreateGenres, setShowModalCreateGenres] = useState(false);
  const [showModalUpdateGenres, setShowModalUpdateGenres] = useState(false);
  const [showModalDeleteGenres, setShowModalDeleteGenres] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listGenres, setListGenres] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListGenres = async () => {
    let dataGenres = await getListGenres();
    if (dataGenres && dataGenres.errcode === 0) {
      setListGenres(dataGenres.data);
    }
  };

  useEffect(() => {
    fetchListGenres();
  }, []);

  const handleShowModalDelete = (genres) => {
    setShowModalDeleteGenres(true);
    setDataDelete(genres);
  };

  const handleClickUpdate = (genres) => {
    setShowModalUpdateGenres(true);
    setDataUpdate(genres);
    console.log(genres);
  };

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
        <ModalDeleteGenres
          show={showModalDeleteGenres}
          setShow={setShowModalDeleteGenres}
          fetchListGenres={fetchListGenres}
          dataDelete={dataDelete}
        />
        <ModalUpdateGenres
          show={showModalUpdateGenres}
          setShow={setShowModalUpdateGenres}
          dataUpdate={dataUpdate}
          fetchListGenres={fetchListGenres}
        />

        <div className="btn-table-container">
          <TableGenres
            listGenres={listGenres}
            handleShowModalDelete={handleShowModalDelete}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerGenres;
