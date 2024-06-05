import React from "react";
import ModalCreatePubliers from "./Modals/ModalCreatePubliers";
import ModalUpdatePubliers from "./Modals/ModalUpdatePubliers";
import { useEffect, useState } from "react";
import { getListPubliers } from "../../../services/publiersService";
import TablePubliers from "./Modals/TablePubliers";
import { FcPlus } from "react-icons/fc";

// import "./ManagerPubliers.scss";
const ManagerPubliers = () => {
  const [showModalCreatePubliers, setShowModalCreatePubliers] = useState(false);
  const [showModalUpdatePubliers, setShowModalUpdatePubliers] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  const [listPubliers, setListPubliers] = useState([]);

  const fetchListPubliers = async () => {
    let dataPubliers = await getListPubliers();
    if (dataPubliers && dataPubliers.errcode === 0) {
      setListPubliers(dataPubliers.data);
    }
  };

  useEffect(() => {
    fetchListPubliers();
  }, []);

  //   const handleClickUpdate = (user) => {
  //     setShowModalUpdateGenres(true);
  //     setDataUpdate(user);
  //   };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Publiers</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreatePubliers(true)}
          >
            <FcPlus />
            Add new publiers
          </button>
        </div>
        <ModalCreatePubliers
          show={showModalCreatePubliers}
          setShow={setShowModalCreatePubliers}
          //   fetchListUser={fetchListUser}
        />
        <ModalUpdatePubliers
          show={showModalUpdatePubliers}
          setShow={setShowModalUpdatePubliers}
          fetchListPubliers={fetchListPubliers}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TablePubliers
            listPubliers={listPubliers}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerPubliers;
