import Header from "./components/Admin/Header/Header";
import { Outlet } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="sidebar_container"></div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
