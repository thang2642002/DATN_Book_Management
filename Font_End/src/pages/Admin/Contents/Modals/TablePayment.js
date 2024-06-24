const TablePayment = (props) => {
  const { listPayment, handleShowModalDeletePayment, handleClickUpdate } =
    props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table className="table table-striped table-hover table-bordered">
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
          {listPayment &&
            listPayment.map((payment, index) => {
              return (
                <tr key={index + 1}>
                  <td>{payment.id}</td>
                  <td>{payment.orderId}</td>
                  <td>{payment.paymentDate}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.paymnetMethod}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(payment)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleShowModalDeletePayment(payment)}
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

export default TablePayment;
