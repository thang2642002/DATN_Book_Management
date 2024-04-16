import logo from "./logo.svg";
import "./App.css";
import { increaseCounter, decreaseCounter } from "./aciton/actions";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Home from "./components/Home";

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter.count;
  });
  const name = useSelector((state) => {
    return state.counter.name;
  });


  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
