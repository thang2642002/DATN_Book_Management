const TablePubliers = (props) => {
  const { listCarts, handleShowModalDeleteCarts } = props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Create Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listCarts &&
            listCarts.map((carts, index) => {
              return (
                <tr key={index + 1}>
                  <td>{carts.id}</td>
                  <td>{carts.userId}</td>
                  <td>{carts.createDate}</td>
                  <td>{carts.quantity}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      // onClick={() => handleClickUpdate(user)}
                    >
                      Upadate
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleShowModalDeleteCarts(carts);
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
