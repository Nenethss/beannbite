import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import BestSelling from "../pages/BestSelling";
import MenuList from "../pages/MenuList";
import AboutUs from "../pages/AboutUs";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div>
        <section id="Home">
          <Home />
        </section>
        <section id="BestSelling">
          <BestSelling />
        </section>
        <section id="MenuList">
          <MenuList />
        </section>
        <section>
          <AboutUs id="About" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
