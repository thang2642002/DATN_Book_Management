import React from "react";
import ReactPaginate from "react-paginate";
import ModalCreateGenres from "./Modals/ModalCreateGenres";
import ModalDeleteGenres from "./Modals/ModalDeleteGenres";
import ModalUpdateGenres from "./Modals/ModalUpdateGenres";
import { useEffect, useState } from "react";
import { getListGenres, getPage } from "../../../services/genresService";
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
  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

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
  };

  const fetchPage = async () => {
    try {
      const response = await getPage(limit, pageSize);
      console.log("response", response);
      setTotalPage(response.totalPages);
      listGenres(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageClick = (event) => {
    setLimit(event.selected + 1);
  };

  useEffect(() => {
    fetchPage();
  }, [limit]);

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
        <div
          className="custom-pagination"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <>
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={totalPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default ManagerGenres;
