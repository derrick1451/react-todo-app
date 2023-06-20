import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

const Layout = () => (
  <div className="main">
    <NavBar />
    <Outlet />
  </div>
);
export default Layout;
