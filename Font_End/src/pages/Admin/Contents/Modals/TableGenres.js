const TableGenres = (props) => {
  const { listGenres } = props;
  return (
    <div className="table-user-container px-4 mt-4">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listGenres &&
            listGenres.map((genres, index) => {
              return (
                <tr key={index + 1}>
                  <td>{genres.id}</td>
                  <td>{genres.genres_name}</td>
                  <td>{genres.description}</td>
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
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenres;
