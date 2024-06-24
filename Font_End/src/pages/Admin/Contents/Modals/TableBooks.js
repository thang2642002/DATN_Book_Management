const TableBooks = (props) => {
  const { listBook, ShowModalDelete, handleClickUpdate } = props;
  console.log("listBook", listBook);
  return (
    <div className="table-user-container px-4 mt-4">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Name Author</th>
            <th scope="col">Name Genres</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Salse</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listBook &&
            listBook.map((book, index) => {
              return (
                <tr key={index + 1}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.authorId}</td>
                  <td>{book.genresId}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity}</td>
                  <td>{book.sales}</td>

                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdate(book)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        ShowModalDelete(book);
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

export default TableBooks;
