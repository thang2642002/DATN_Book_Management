import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../aciton/actions";
import { useDispatch, useSelector } from "react-redux";
const TableUser = () => {
  // const [listUser, setListUser] = useState([]);

  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:5000/users/all");
  //   let data = res && res.data ? res.data : [];
  //   setListUser(data);
  // };

  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUser());
  }, []);
  return (
    <>
      <h4 className="my-3">Table User: </h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Usernam</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isError === true ? (
            <>
              <div>something wrongs, please again ...</div>
            </>
          ) : (
            <>
              {isLoading === true ? (
                <>
                  <div>Loading ....</div>
                </>
              ) : (
                <>
                  {listUser.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
