import React from "react";
import ReactPaginate from "react-paginate";
import ModalCreatePubliers from "./Modals/ModalCreatePubliers";
import ModalUpdatePubliers from "./Modals/ModalUpdatePubliers";
import ModalDeleteSuppliers from "./Modals/ModalDeleteSuppliers";
import { useEffect, useState } from "react";
import { getListPubliers, getPage } from "../../../services/publiersService";
import TablePubliers from "./Modals/TablePubliers";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPubliers.scss";
const ManagerPubliers = () => {
  const [showModalCreatePubliers, setShowModalCreatePubliers] = useState(false);
  const [showModalUpdatePubliers, setShowModalUpdatePubliers] = useState(false);
  const [showModalDeletePubliers, setShowModalDeletePubliers] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPubliers, setListPubliers] = useState([]);
  const [dataDelete, setDataDelete] = useState({});
  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

  const fetchListPubliers = async () => {
    let dataPubliers = await getListPubliers();
    if (dataPubliers && dataPubliers.errcode === 0) {
      setListPubliers(dataPubliers.data);
    }
  };

  useEffect(() => {
    fetchListPubliers();
  }, []);

  const handleShowModalDeleteSubliers = (suppliers) => {
    setShowModalDeletePubliers(true);
    setDataDelete(suppliers);
  };

  const handleClickUpdate = (suppliers) => {
    setShowModalUpdatePubliers(true);
    setDataUpdate(suppliers);
  };

  const fetchPage = async () => {
    try {
      const response = await getPage(limit, pageSize);
      console.log("response", response.data);
      setListPubliers(response.data);
      setTotalPage(response.totalPages);
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
      <div className="title">Manager Publiers</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreatePubliers(true)}
          >
            <FcPlus />
            Add new publiers
          </button>
        </div>
        <ModalCreatePubliers
          show={showModalCreatePubliers}
          setShow={setShowModalCreatePubliers}
          fetchListPubliers={fetchListPubliers}
        />
        <ModalUpdatePubliers
          show={showModalUpdatePubliers}
          setShow={setShowModalUpdatePubliers}
          fetchListPubliers={fetchListPubliers}
          dataUpdate={dataUpdate}
        />

        <ModalDeleteSuppliers
          show={showModalDeletePubliers}
          setShow={setShowModalDeletePubliers}
          dataDelete={dataDelete}
          fetchListPubliers={fetchListPubliers}
        />

        <div className="btn-table-container">
          <TablePubliers
            listPubliers={listPubliers}
            handleShowModalDeleteSubliers={handleShowModalDeleteSubliers}
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

export default ManagerPubliers;
