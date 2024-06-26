const TablePubliers = (props) => {
  const { listPubliers, handleShowModalDeleteSubliers, handleClickUpdate } =
    props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Contact Info</th>
            <th scope="col">Description</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listPubliers &&
            listPubliers.map((suppliers, index) => {
              return (
                <tr key={index + 1}>
                  <td>{suppliers.id}</td>
                  <td>{suppliers.suppliers_name}</td>
                  <td>{suppliers.contact_info}</td>
                  <td>{suppliers.description}</td>
                  <td>{suppliers.phone}</td>
                  <td>{suppliers.email}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(suppliers)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleShowModalDeleteSubliers(suppliers);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePubliers;
