import React from "react";
import ModalCreateCarts from "./Modals/ModalCreateCarts";
import ModalUpdateCarts from "./Modals/ModalUpdateCarts";
import { useEffect, useState } from "react";
import { getListCart } from "../../../services/cartsService";
import TableCarts from "./Modals/TableCarts";
import { FcPlus } from "react-icons/fc";

// import "./ManagerCarts.scss";
const ManagerCarts = () => {
  const [showModalCreateCarts, setShowModalCreateCarts] = useState(false);
  const [showModalUpdateCarts, setShowModalUpdateCarts] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  const [listCarts, setListCarts] = useState([]);

  const fetchListCarts = async () => {
    let dataCarts = await getListCart();
    if (dataCarts && dataCarts.errcode === 0) {
      setListCarts(dataCarts.data);
    }
    console.log("chek cart", dataCarts);
  };

  useEffect(() => {
    fetchListCarts();
  }, []);

  // const handleClickUpdate = (user) => {
  //   setShowModalUpdateGenres(true);
  //   setDataUpdate(user);
  // };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Carts</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateCarts(true)}
          >
            <FcPlus />
            Add new carts
          </button>
        </div>
        <ModalCreateCarts
          show={showModalCreateCarts}
          setShow={setShowModalCreateCarts}
          fetchListCarts={fetchListCarts}
        />
        <ModalUpdateCarts
          show={showModalUpdateCarts}
          setShow={setShowModalUpdateCarts}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableCarts
            listCarts={listCarts}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerCarts;
