import Base from "../base";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = ({ children }) => (
  <Base>
    <Navbar />
    {children}
    <Footer />
  </Base>
);

export default MainLayout;
