import React from "react";
import ReactPaginate from "react-paginate";
import ModalCreateUser from "./Modals/ModalCreateUser";
import ModalUpdateUser from "./Modals/ModalUpdateUser";
import ModalDeleteUser from "./Modals/ModalDeleteUser";
import { useEffect, useState } from "react";
import { getListUser, getPage } from "../../../services/userService";
import TableUser from "./Modals/TableUser";
import { FcPlus } from "react-icons/fc";

import "./ManagerUser.scss";
const ManagerUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listUser, setListUser] = useState([]);

  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

  const fetchListUser = async () => {
    let dataUser = await getListUser();
    if (dataUser && dataUser.errcode === 0) {
      setListUser(dataUser.data);
    }
  };

  // useEffect(() => {
  //   fetchListUser();
  // }, []);

  useEffect(() => {
    fechPage();
    console.log("limit", limit);
  }, [limit]);

  const fechPage = async () => {
    const data = await getPage(limit, pageSize);
    console.log("data", data);
    setListUser(data.data);
    setTotalPage(data.totalItems);
  };

  const handleClickUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
    console.log("check user", user);
    console.log("check update user: ", dataUpdate);
  };

  const handleShowDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const handlePageClick = (event) => {
    console.log("evt", event);
    setLimit(event.selected + 1);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new user
          </button>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          fetchListUser={fetchListUser}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          fetchListUser={fetchListUser}
          dataDelete={dataDelete}
        />

        <div className="btn-table-container">
          <TableUser
            listUser={listUser}
            handleClickUpdate={handleClickUpdate}
            handleShowDelete={handleShowDelete}
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
              // forcePage={pageOffset}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
