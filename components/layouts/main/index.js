import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";
import Auth from './auth'

const MainLayout = ({ children }) => (
  <Base>
    <Navbar />
    <Auth />
    {children}
    <Footer />
  </Base>
);

export default MainLayout;
