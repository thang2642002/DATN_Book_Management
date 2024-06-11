const TableTransaction = (props) => {
  const {
    listTransaction,
    handleShowModalDeleteTransaction,
    handleClickUpdate,
  } = props;
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
          {listTransaction &&
            listTransaction.map((transaction, index) => {
              return (
                <tr key={index + 1}>
                  <td>{transaction.id}</td>
                  <td>{transaction.transactionDate}</td>
                  <td>{transaction.transactionType}</td>
                  <td>{transaction.bookId}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.price}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(transaction)}
                    >
                      Upadte
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleShowModalDeleteTransaction(transaction)
                      }
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

export default TableTransaction;
