import React from "react";
import ReactPaginate from "react-paginate";
import ModalCreateReview from "./Modals/ModalCreateReview";
import ModalUpdateReview from "./Modals/ModalUpdateReview";
import ModalDeleteReview from "./Modals/ModalDeleteReview";
import { useEffect, useState } from "react";
import { getListReview, getPage } from "../../../services/reviewService";
import TableReview from "./Modals/TableReview";
import { FcPlus } from "react-icons/fc";

// import "./ManagerReview.scss";
const ManagerReview = () => {
  const [showModalCreateReview, setShowModalCreateReview] = useState(false);
  const [showModalUpdateReview, setShowModalUpdateReview] = useState(false);
  const [showModalDeleteReview, setShowModalDeleteReview] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listReview, setListReview] = useState([]);
  const [dataDelete, setDataDelete] = useState({});
  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

  const fetchListReview = async () => {
    let dataReview = await getListReview();
    if (dataReview && dataReview.errcode === 0) {
      setListReview(dataReview.data);
    }
  };

  useEffect(() => {
    fetchListReview();
  }, []);

  const handleShowModalDeleteReview = (review) => {
    setShowModalDeleteReview(true);
    setDataDelete(review);
  };

  const handleClickUpdate = (review) => {
    setShowModalUpdateReview(true);
    setDataUpdate(review);
  };

  const fetchPage = async () => {
    try {
      const response = await getPage(limit, pageSize);
      console.log("response", response);
      setTotalPage(response.totalPages);
      listReview(response.data);
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
      <div className="title">Manager Review</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateReview(true)}
          >
            <FcPlus />
            Add New Review
          </button>
        </div>
        <ModalCreateReview
          show={showModalCreateReview}
          setShow={setShowModalCreateReview}
          fetchListReview={fetchListReview}
        />
        <ModalUpdateReview
          show={showModalUpdateReview}
          setShow={setShowModalUpdateReview}
          fetchListReview={fetchListReview}
          dataUpdate={dataUpdate}
        />

        <ModalDeleteReview
          show={showModalDeleteReview}
          setShow={setShowModalDeleteReview}
          dataDelete={dataDelete}
          fetchListReview={fetchListReview}
        />

        <div className="btn-table-container">
          <TableReview
            listReview={listReview}
            handleShowModalDeleteReview={handleShowModalDeleteReview}
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

export default ManagerReview;
