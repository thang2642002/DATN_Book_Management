const TableTransaction = () => {
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Transaction Date</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">BookId</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>10/5/2024</td>
            <td>purchase</td>
            <td>4</td>
            <td>200</td>
            <td>200</td>
            <td>
              <button className="btn btn-secondary">View</button>
              <button
                className="btn btn-warning mx-3"
                // onClick={() => handleClickUpdate(user)}
              >
                Upadte
              </button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
