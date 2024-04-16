import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { createNewUser } from "../aciton/actions";
import { useDispatch, useSelector } from "react-redux";
const FormAddNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const isCreating = useSelector((state) => state.user.isCreating);

  const dispatch = useDispatch();

  const handleCreateUser = async () => {
    console.log("Creating user with email:", email);
    console.log("Creating user with password:", password);
    console.log("Creating user with username:", username);

    await dispatch(createNewUser(email, password, username));

    console.log("User created successfully!");
    setInput();
  };

  const setInput = () => {
    setEmail("");
    setPassword("");
    setUserName("");
  };
  return (
    <>
      <h4 className="my-3">Create new User: </h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={() => handleCreateUser()}
          disabled={isCreating}
        >
          Create new user
        </Button>
      </Form>
    </>
  );
};
export default FormAddNew;
