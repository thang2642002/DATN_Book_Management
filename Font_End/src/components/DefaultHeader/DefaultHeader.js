import Header from "../Header/Header";
import HeaderClient from "../Header/HeaderClient";
function DefaultHeader({ children }) {
  return (
    <div>
      <HeaderClient />
      {children}
    </div>
  );
}

export default DefaultHeader;
