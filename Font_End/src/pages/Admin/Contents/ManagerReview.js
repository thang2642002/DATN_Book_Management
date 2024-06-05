import React from "react";
import ModalCreateReview from "./Modals/ModalCreateReview";
import ModalUpdateReview from "./Modals/ModalUpdateReview";
import { useEffect, useState } from "react";
import { getListReview } from "../../../services/reviewService";
import TableReview from "./Modals/TableReview";
import { FcPlus } from "react-icons/fc";

// import "./ManagerReview.scss";
const ManagerReview = () => {
  const [showModalCreateReview, setShowModalCreateReview] = useState(false);
  const [showModalUpdateReview, setShowModalUpdateReview] = useState(false);
  //   const [dataUpdate, setDataUpdate] = useState({});
  const [listReview, setListReview] = useState([]);

  const fetchListReview = async () => {
    let dataReview = await getListReview();
    if (dataReview && dataReview.errcode === 0) {
      setListReview(dataReview.data);
    }
  };

  useEffect(() => {
    fetchListReview();
  }, []);

  //   const handleClickUpdate = (user) => {
  //     setShowModalUpdateGenres(true);
  //     setDataUpdate(user);
  //   };

  return (
    <div className="manager-user-container">
      <div className="title">Manager Review</div>
      <div className="user-contents">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setShowModalCreateReview(true)}
          >
            <FcPlus />
            Add New Review
          </button>
        </div>
        <ModalCreateReview
          show={showModalCreateReview}
          setShow={setShowModalCreateReview}
          fetchListReview={fetchListReview}
        />
        <ModalUpdateReview
          show={showModalUpdateReview}
          setShow={setShowModalUpdateReview}
          //   fetchListUser={fetchListUser}
          //   dataUpdate={dataUpdate}
        />

        <div className="btn-table-container">
          <TableReview
            listReview={listReview}
            // handleClickUpdate={handleClickUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerReview;
