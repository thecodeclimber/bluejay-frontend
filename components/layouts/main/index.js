import Base from "../base";
import Navbar from "./navbar";

const MainLayout = ({ children }) => (
  <Base>
    <Navbar />
    {children}
  </Base>
);

export default MainLayout;
