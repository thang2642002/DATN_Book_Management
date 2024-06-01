import HeaderClient from "../Header/HeaderClient";
import { Outlet } from "react-router-dom";

function DefaultHeader() {
  return (
    <div>
      <HeaderClient />
      <Outlet />
    </div>
  );
}

export default DefaultHeader;
