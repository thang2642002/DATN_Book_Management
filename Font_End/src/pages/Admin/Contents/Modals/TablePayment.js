const TablePayment = () => {
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Order Id</th>
            <th scope="col">Payment Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>20/5/2024</td>
            <td>500</td>
            <td>Credit Card</td>
            <td>1</td>
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

export default TablePayment;
