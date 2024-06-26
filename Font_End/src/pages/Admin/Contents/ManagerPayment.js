import React from "react";
import ModalCreatepayment from "./Modals/ModalCreatePayment";
import ModalUpdatepayment from "./Modals/ModalUpdatePayment";
import ModalDeletePayment from "./Modals/ModalDeletePayment";
import { useEffect, useState } from "react";
import { getListPayment } from "../../../services/paymentService";
import TablePayment from "./Modals/TablePayment";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPayment.scss";
const ManagerPayment = () => {
  const [ShowModalCreatePayment, setShowModalCreatePayment] = useState(false);
  const [showModalUpdatePayment, setShowModalUpdatePayment] = useState(false);
  const [showModalDeletePayment, setShowModalDeletePayment] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listPayment, setListPayment] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListPayment = async () => {
    let dataPayment = await getListPayment();
    if (dataPayment && dataPayment.errcode === 0) {
      setListPayment(dataPayment.data);
    }
  };

  useEffect(() => {
    fetchListPayment();
  }, []);

  const handleShowModalDeletePayment = (payment) => {
    setShowModalDeletePayment(true);
    setDataDelete(payment);
  };

  const handleClickUpdate = (payment) => {
    setShowModalUpdatePayment(true);
    setDataUpdate(payment);
  
  };

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
          fetchListPayment={fetchListPayment}
        />
        <ModalUpdatepayment
          show={showModalUpdatePayment}
          setShow={setShowModalUpdatePayment}
          fetchListPayment={fetchListPayment}
          dataUpdate={dataUpdate}
        />
        <ModalDeletePayment
          show={showModalDeletePayment}
          setShow={setShowModalDeletePayment}
          dataDelete={dataDelete}
          fetchListPayment={fetchListPayment}
        />

        <div className="btn-table-container">
          <TablePayment
            listPayment={listPayment}
            handleShowModalDeletePayment={handleShowModalDeletePayment}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerPayment;
