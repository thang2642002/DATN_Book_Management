const TableOrder = () => {
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
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
          <tr>
            <td>1</td>
            <td>20/5/2024</td>
            <td>balaba</td>
            <td>100</td>
            <td>2</td>
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

export default TableOrder;
