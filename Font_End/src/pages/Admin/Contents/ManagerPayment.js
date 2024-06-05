import React from "react";
import ModalCreatepayment from "./Modals/ModalCreatePayment";
import ModalUpdatepayment from "./Modals/ModalUpdatePayment";
import { useEffect, useState } from "react";
import { getListPayment } from "../../../services/paymentService";
import TablePayment from "./Modals/TablePayment";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPayment.scss";
const ManagerPayment = () => {
  const [ShowModalCreatePayment, setShowModalCreatePayment] = useState(false);
  const [showModalUpdatePayment, setShowModalUpdatePayment] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  const [listPayment, setListPayment] = useState([]);

  const fetchListPayment = async () => {
    let dataPayment = await getListPayment();
    if (dataPayment && dataPayment.errcode === 0) {
      setListPayment(dataPayment.data);
    }
  };

  useEffect(() => {
    fetchListPayment();
  }, []);

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
          fetchListPayment={fetchListPayment}
        />
        <ModalUpdatepayment
          show={showModalUpdatePayment}
          setShow={setShowModalUpdatePayment}
          // fetchListPayment={fetchListPayment}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TablePayment
            listPayment={listPayment}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerPayment;
