import { Routes, Route } from "react-router-dom";
import { routers } from "./routers/index";
import DefaultHeader from "./components/DefaultHeader/DefaultHeader";
import "./App.scss";
import { Fragment } from "react";


function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Routes>
          {routers.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultHeader : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
      <div className="sliderbar_container">
    
      </div>
      <div className="content-container"></div>
    </div>
  );
}

export default App;
