const TableBooks = () => {
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
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
          <tr>
            <td>1</td>
            <td>Sách Hay</td>
            <td>Author</td>
            <td>Genres</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Salse</td>

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

export default TableBooks;
