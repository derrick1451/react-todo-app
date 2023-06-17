import NavBar from "./navBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <Outlet/>
      </div>
    );
  };
  export default Layout;