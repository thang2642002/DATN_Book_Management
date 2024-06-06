const TableAuthor = (props) => {
  const { listAuthor, handleShowModalDeleteAuthor } = props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Bio</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listAuthor &&
            listAuthor.map((author, index) => {
              return (
                <tr key={index + 1}>
                  <td>{author.id}</td>
                  <td>{author.author_name}</td>
                  <td>{author.address}</td>
                  <td>{author.phone}</td>
                  <td>{author.bio}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      // onClick={() => handleClickUpdate(user)}
                    >
                      Upadte
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleShowModalDeleteAuthor(author);
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

export default TableAuthor;
