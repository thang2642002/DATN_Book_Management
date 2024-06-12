const TableOrder = (props) => {
  const { listOrder, handleShowModalDeleteOrder, handleClickUpdate } = props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Order Date</th>
            <th scope="col">Description</th>
            <th scope="col">Total Price</th>
            <th scope="col">User ID</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOrder &&
            listOrder.map((order, index) => {
              return (
                <tr key={index + 1}>
                  <td>{order.id}</td>
                  <td>{order.order_date}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.description}</td>
                  <td>{order.userId}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(order)}
                    >
                      Upadte
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleShowModalDeleteOrder(order)}
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

export default TableOrder;
