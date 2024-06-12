const TableReview = (props) => {
  const { listReview, handleShowModalDeleteReview, handleClickUpdate } = props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Rating</th>
            <th scope="col">Comment</th>
            <th scope="col">Review Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listReview &&
            listReview.map((review, index) => {
              return (
                <tr key={index + 1}>
                  <td>{review.id}</td>
                  <td>{review.bookId}</td>
                  <td>{review.userId}</td>
                  <td>{review.rating}</td>
                  <td>{review.comment}</td>
                  <td>{review.reviewDate}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(review)}
                    >
                      Upadte
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleShowModalDeleteReview(review);
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

export default TableReview;
