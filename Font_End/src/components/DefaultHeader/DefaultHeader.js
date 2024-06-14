import HeaderClient from "../Header/HeaderClient";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function DefaultHeader() {
  return (
    <div>
      <HeaderClient />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultHeader;
