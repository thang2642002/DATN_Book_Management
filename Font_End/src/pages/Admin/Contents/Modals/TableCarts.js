const TablePubliers = () => {
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
          <tr>
            <td>1</td>
            <td>1</td>
            <td>20/5/2024</td>
            <td>10</td>
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

export default TablePubliers;
