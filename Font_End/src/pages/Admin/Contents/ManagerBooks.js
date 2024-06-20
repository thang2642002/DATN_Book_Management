import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FcPlus } from "react-icons/fc";
import ModalCreateBoook from "./Modals/ModalCreateBooks";
import ModalUpdateBooks from "./Modals/ModalUpdateBooks";
import ModalDeleteBooks from "./Modals/ModalDeleteBooks";
import TableBooks from "./Modals/TableBooks";
import { getListBooks, getPage } from "../../../services/BookService";

const ManagerBooks = () => {
  const [showModalCreateBook, setShowModalCreateBook] = useState(false);
  const [showModalUpdateBook, setShowModalUpdateBook] = useState(false);
  const [showModalDeleteBook, setShowMoadalBookDelete] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listBook, setListBook] = useState([]);
  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

  const fetchListBooks = async () => {
    let dataBooks = await getListBooks();

    if (dataBooks && dataBooks.errcode === 0) {
      setListBook(dataBooks.data);
    }
  };

  const ShowModalDelete = (book) => {
    setDataDelete(book);
    setShowMoadalBookDelete(true);
  };
  const handleClickUpdate = (book) => {
    setShowModalUpdateBook(true);
    setDataUpdate(book);
  };

  useEffect(() => {
    fetchListBooks();
  }, []);

  const fetchPage = async () => {
    try {
      const response = await getPage(limit, pageSize);
      console.log("response", response);
      setTotalPage(response.totalPages);
      setListBook(response.data);
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
      <div className="title">Manager Book</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateBook(true)}
          >
            <FcPlus />
            Add new book
          </button>
        </div>
        <ModalCreateBoook
          show={showModalCreateBook}
          setShow={setShowModalCreateBook}
          fetchListBooks={fetchListBooks}
        />
        <ModalUpdateBooks
          show={showModalUpdateBook}
          setShow={setShowModalUpdateBook}
          fetchListBooks={fetchListBooks}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteBooks
          show={showModalDeleteBook}
          setShow={setShowMoadalBookDelete}
          dataDelete={dataDelete}
          fetchListBooks={fetchListBooks}
        />

        <div className="btn-table-container">
          <TableBooks
            listBook={listBook}
            ShowModalDelete={ShowModalDelete}
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

export default ManagerBooks;
