import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharePage/Navbar/Navbar";
import Footer from "../../pages/sharePage/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
