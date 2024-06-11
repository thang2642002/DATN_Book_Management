import React from "react";
import ModalCreateOrder from "./Modals/ModalCreateOrder";
import ModalUpdateOrder from "./Modals/ModalUpdateOrder";
import ModalDeleteOrder from "./Modals/ModalDeleteOrder";
import { useEffect, useState } from "react";
import { getListOrder } from "../../../services/orderService";
import TableOrder from "./Modals/TableOrder";
import { FcPlus } from "react-icons/fc";

// import "./ManagerOrder.scss";
const ManagerOrder = () => {
  const [showModalCreateOrder, setShowModalCreateOrder] = useState(false);
  const [showModalUpdateOrder, setShowModalUpdateOrder] = useState(false);
  const [showModalDeleteOrder, setShowModalDeleteOrder] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listOrder, setListOrder] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListOrder = async () => {
    let dataOrder = await getListOrder();
    if (dataOrder && dataOrder.errcode === 0) {
      setListOrder(dataOrder.data);
    }
  };

  useEffect(() => {
    fetchListOrder();
  }, []);

  const handleShowModalDeleteOrder = (order) => {
    setShowModalDeleteOrder(true);
    setDataDelete(order);
  };

  const handleClickUpdate = (order) => {
    setShowModalUpdateOrder(true);
    setDataUpdate(order);
    console.log("order: ", order);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Order</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateOrder(true)}
          >
            <FcPlus />
            Add new order
          </button>
        </div>
        <ModalCreateOrder
          show={showModalCreateOrder}
          setShow={setShowModalCreateOrder}
          fetchListOrder={fetchListOrder}
        />
        <ModalUpdateOrder
          show={showModalUpdateOrder}
          setShow={setShowModalUpdateOrder}
          fetchListOrder={fetchListOrder}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteOrder
          show={showModalDeleteOrder}
          setShow={setShowModalDeleteOrder}
          dataDelete={dataDelete}
          fetchListOrder={fetchListOrder}
        />

        <div className="btn-table-container">
          <TableOrder
            listOrder={listOrder}
            handleShowModalDeleteOrder={handleShowModalDeleteOrder}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerOrder;
