import React from "react";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ModalCreateUser from "./Modals/ModalCreateUser";
import ModalUpdateUser from "./Modals/ModalUpdateUser";
import ModalDeleteUser from "./Modals/ModalDeleteUser";
import { useEffect, useState } from "react";
import { getListUser, getPage, getByName } from "../../../services/userService";
import TableUser from "./Modals/TableUser";
import { FcPlus } from "react-icons/fc";

import "./ManagerUser.scss";
const ManagerUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [userName, setUserName] = useState("thang");
  const [listUser, setListUser] = useState([]);

  const [checkSearch, setCheckSearch] = useState(false);

  const pageSize = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);

  const fetchListUser = async () => {
    let dataUser = await getListUser();
    if (dataUser && dataUser.errcode === 0) {
      setListUser(dataUser.data);
    }
  };

  useEffect(() => {
    if (listUser && checkSearch === true) {
      fechUserByName();
      console.log(1);
    } else {
      fechPage();
      console.log(2);
    }
  }, [limit, checkSearch]);

  const fechPage = async () => {
    const data = await getPage(limit, pageSize, userName);
    setListUser(data.data);
    setTotalPage(data.totalItems);
  };

  const handleClickUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleShowDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const handlePageClick = (event) => {
    console.log("evt", event);
    setLimit(event.selected + 1);
  };

  const fechUserByName = async () => {
    const user = await getByName(userName);
    setListUser(user.data);
    setCheckSearch(true);
    console.log("seach", user.data);
    console.log("userName", user);
  };

  const handleFindByName = () => {
    fechUserByName();
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-contents">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="btn-add-new">
            <button
              className="btn btn-primary "
              onClick={() => setShowModalCreateUser(true)}
            >
              <FcPlus />
              Add new user
            </button>
          </div>
          <div className="search" style={{ marginRight: "28px" }}>
            <InputGroup className="mb-3" size="md">
              <Form.Control
                placeholder="Enter your input"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Button
                variant="primary"
                id="button-addon2"
                onClick={handleFindByName}
              >
                Search
              </Button>
            </InputGroup>
          </div>
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
