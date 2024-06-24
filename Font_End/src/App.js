// src/App.js
import { Routes, Route, useLocation } from "react-router-dom";
import { routers } from "./routers/index";
import "./App.scss";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "./services/userService";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/Slice/userSlice";

import { updateProduct } from "./redux/Slice/productSlice";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let storageData = localStorage.getItem("acceess_tokens");
    if (storageData) {
      const decode = jwtDecode(storageData);
      if (decode?.id) {
        handleGetDetailUser(decode?.id, storageData);
      }
    }
  });

  const handleGetDetailUser = async (id) => {
    const dataUser = await getUserById(id);
    dispatch(updateUser(dataUser?.data));
  };
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
                >
                  {child.children?.map((child, childIndex) => (
                    <Route
                      key={childIndex}
                      path={child.path}
                      element={child.element}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
