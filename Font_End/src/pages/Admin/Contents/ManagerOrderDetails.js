import React from "react";
import ModalCreateOrderDetails from "./Modals/ModalCreateOrderDetails";
import ModalUpdateOrderDetails from "./Modals/ModalUpdateOrderDetails";
import ModalDeleteOrderDetails from "./Modals/ModalDeleteOrderDetails";
import { useEffect, useState } from "react";
import { getListOrderDetails } from "../../../services/orderDetailsService";
import TableOrderDetails from "./Modals/TableOrderDetails";
import { FcPlus } from "react-icons/fc";

// import "./ManagerOrderDetails.scss";
const ManagerOrderDetails = () => {
  const [showModalCreateOrderDetails, setShowModalCreateOrderDetails] =
    useState(false);
  const [showModalUpdateOrderDetails, setShowModalUpdateOrderDetails] =
    useState(false);
  const [showModalDeleteOrderDetails, setShowModalDeleteOrderDetails] =
    useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listOrderDetails, setListOrderDetails] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListOrderDetails = async () => {
    let dataUser = await getListOrderDetails();
    if (dataUser && dataUser.errcode === 0) {
      setListOrderDetails(dataUser.data);
    }
  };

  useEffect(() => {
    fetchListOrderDetails();
  }, []);

  const handleShowModalDeleteOrderDetails = (orderDetails) => {
    setShowModalDeleteOrderDetails(true);
    setDataDelete(orderDetails);
  };

  const handleClickUpdate = (orderDetails) => {
    setShowModalUpdateOrderDetails(true);
    setDataUpdate(orderDetails);
    console.log("orderdetails", orderDetails);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Order Details</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateOrderDetails(true)}
          >
            <FcPlus />
            Add new Order Details
          </button>
        </div>
        <ModalCreateOrderDetails
          show={showModalCreateOrderDetails}
          setShow={setShowModalCreateOrderDetails}
          fetchListOrderDetails={fetchListOrderDetails}
        />
        <ModalUpdateOrderDetails
          show={showModalUpdateOrderDetails}
          setShow={setShowModalUpdateOrderDetails}
          fetchListOrderDetails={fetchListOrderDetails}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteOrderDetails
          show={showModalDeleteOrderDetails}
          setShow={setShowModalDeleteOrderDetails}
          dataDelete={dataDelete}
          fetchListOrderDetails={fetchListOrderDetails}
        />

        <div className="btn-table-container">
          <TableOrderDetails
            listOrderDetails={listOrderDetails}
            handleShowModalDeleteOrderDetails={
              handleShowModalDeleteOrderDetails
            }
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerOrderDetails;
