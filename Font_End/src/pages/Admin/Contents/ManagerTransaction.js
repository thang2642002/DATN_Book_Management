import React from "react";
import ModalCreateTransaction from "./Modals/ModalCreateTransaction";
import ModalUpdateTransaction from "./Modals/ModalUpdateTransaction";
import ModalDeleteTransaction from "./Modals/ModalDeleteTransaction";
import { useEffect, useState } from "react";
import { getListTransaction } from "../../../services/transactionService";
import TableTransaction from "./Modals/TableTransaction";
import { FcPlus } from "react-icons/fc";

// import "./ManagerTransaction.scss";
const ManagerTransaction = () => {
  const [ShowModalCreateTransaction, setShowModalCreateTransaction] =
    useState(false);
  const [showModalUpdateTransaction, setShowModalUpdateTransaction] =
    useState(false);
  const [showModalDeleteTransaction, setShowModalDeleteTransaction] =
    useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listTransaction, setListTransaction] = useState([]);
  const [dataDelete, setDataDelete] = useState({});

  const fetchListTransaction = async () => {
    let dataTransaction = await getListTransaction();
    if (dataTransaction && dataTransaction.errcode === 0) {
      setListTransaction(dataTransaction.data);
    }
    console.log("check tran", dataTransaction);
  };

  useEffect(() => {
    fetchListTransaction();
  }, []);

  const handleShowModalDeleteTransaction = (transaction) => {
    console.log("transaction", transaction);
    setShowModalDeleteTransaction(true);
    setDataDelete(transaction);
  };

  const handleClickUpdate = (transaction) => {
    setShowModalUpdateTransaction(true);
    setDataUpdate(transaction);
    console.log("transaction", transaction);
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Transaction</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateTransaction(true)}
          >
            <FcPlus />
            Add New Transaction
          </button>
        </div>
        <ModalCreateTransaction
          show={ShowModalCreateTransaction}
          setShow={setShowModalCreateTransaction}
          fetchListTransaction={fetchListTransaction}
        />
        <ModalUpdateTransaction
          show={showModalUpdateTransaction}
          setShow={setShowModalUpdateTransaction}
          fetchListTransaction={fetchListTransaction}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteTransaction
          show={showModalDeleteTransaction}
          setShow={setShowModalDeleteTransaction}
          dataDelete={dataDelete}
          fetchListTransaction={fetchListTransaction}
        />

        <div className="btn-table-container">
          <TableTransaction
            listTransaction={listTransaction}
            handleShowModalDeleteTransaction={handleShowModalDeleteTransaction}
            handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerTransaction;
