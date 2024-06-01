// src/App.js
import { Routes, Route } from "react-router-dom";
import { routers } from "./routers/index";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Routes>
          {routers.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children?.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </div>
      <div className="sliderbar_container"></div>
      <div className="content-container"></div>
    </div>
  );
}

export default App;
