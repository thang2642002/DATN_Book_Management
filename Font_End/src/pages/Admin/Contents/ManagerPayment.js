import React from "react";
import ModalCreatepayment from "./Modals/ModalCreatePayment";
import ModalUpdatepayment from "./Modals/ModalUpdatePayment";
import { useEffect, useState } from "react";
import { getListUser } from "../../../services/userService";
import TablePayment from "./Modals/TablePayment";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPayment.scss";
const ManagerPayment = () => {
  const [ShowModalCreatePayment, setShowModalCreatePayment] = useState(false);
  const [showModalUpdatePayment, setShowModalUpdatePayment] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  //   const [listUser, setListUser] = useState([]);

  //   const fetchListUser = async () => {
  //     let dataUser = await getListUser();
  //     if (dataUser && dataUser.errcode === 0) {
  //       setListUser(dataUser.data);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchListUser();
  //   }, []);

  //   const handleClickUpdate = (user) => {
  //     setShowModalUpdateGenres(true);
  //     setDataUpdate(user);
  //   };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Payment</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreatePayment(true)}
          >
            <FcPlus />
            Add New Payment
          </button>
        </div>
        <ModalCreatepayment
          show={ShowModalCreatePayment}
          setShow={setShowModalCreatePayment}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdatepayment
          show={showModalUpdatePayment}
          setShow={setShowModalUpdatePayment}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TablePayment
          // listUser={listUser}
          // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerPayment;
