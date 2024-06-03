import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import ModalCreateBoook from "./Modals/ModalCreateBooks";
import ModalUpdateBooks from "./Modals/ModalUpdateBooks";
import TableBooks from "./Modals/TableBooks";
import { getListBooks } from "../../../services/BookService";

const ManagerBooks = () => {
  const [showModalCreateBook, setShowModalCreateBook] = useState(false);
  const [showModalUpdateBook, setShowModalUpdateBook] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listBook, setListBook] = useState([]);

  const fetchListBooks = async () => {
    let dataBooks = await getListBooks();

    if (dataBooks && dataBooks.errcode === 0) {
      setListBook(dataBooks.data);
    }
    console.log("check list book", listBook);
  };

  useEffect(() => {
    fetchListBooks();
  }, []);
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
          // fetchListUser={fetchListUser}
        />
        <ModalUpdateBooks
          show={showModalUpdateBook}
          setShow={setShowModalUpdateBook}
          // fetchListUser={fetchListUser}
          dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableBooks
            listBook={listBook}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerBooks;
