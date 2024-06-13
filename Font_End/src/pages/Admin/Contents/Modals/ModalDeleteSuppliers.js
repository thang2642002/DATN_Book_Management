import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteSuppliers } from "../../../../services/publiersService";

const ModalDeleteSuppliers = (props) => {
  const { show, setShow, dataDelete, fetchListPubliers } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteSuppliers = async () => {
    const data = await deleteSuppliers(dataDelete.id);
    if (data && data.errcode === 0) {
      toast.success(data.message);
      await fetchListPubliers();
      handleClose();
    }
    if (data && data.errcode !== 0) {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Delete Suppliers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this Suppliers.suppliers_name ={" "}
          <b>
            {dataDelete && dataDelete.suppliers_name
              ? dataDelete.suppliers_name
              : ""}
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteSuppliers();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteSuppliers;
