import React from "react";
import ModalCreateAuthor from "./Modals/ModalCreateAuthor";
import ModalUpdateAuthor from "./Modals/ModalUpdateAuthor";
import ModalDeleteAuthor from "./Modals/ModalDeleteAuthor";
import { useEffect, useState } from "react";
import { getListAuthor } from "../../../services/authorService";
import TableAuthor from "./Modals/TableAuthor";
import { FcPlus } from "react-icons/fc";

// import "./ManagerAuthor.scss";
const ManagerAuthor = () => {
  const [showModalCreateAuthor, setShowModalCreateAuthor] = useState(false);
  const [showModalUpdateAuthor, setShowModalUpdateAuthor] = useState(false);
  const [showModalDeleteAuthor, setShowModalDeleteAuthor] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listAuthor, setListAuthor] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListAuthor = async () => {
    let dataAuthor = await getListAuthor();
    if (dataAuthor && dataAuthor.errcode === 0) {
      setListAuthor(dataAuthor.data);
    }
  };

  const handleShowModalDeleteAuthor = (author) => {
    setShowModalDeleteAuthor(true);
    setDataDelete(author);
  };

  useEffect(() => {
    fetchListAuthor();
  }, []);

  const handleClickUpdate = (author) => {
    setShowModalUpdateAuthor(true);
    setDataUpdate(author);
    console.log("author", author);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Author</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateAuthor(true)}
          >
            <FcPlus />
            Add new author
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
          dataUpdate={dataUpdate}
          fetchListAuthor={fetchListAuthor}
        />
        <ModalDeleteAuthor
          show={showModalDeleteAuthor}
          setShow={setShowModalDeleteAuthor}
          dataDelete={dataDelete}
          fetchListAuthor={fetchListAuthor}
        />

        <div className="btn-table-container">
          <TableAuthor
            listAuthor={listAuthor}
            handleClickUpdate={handleClickUpdate}
            handleShowModalDeleteAuthor={handleShowModalDeleteAuthor}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerAuthor;
