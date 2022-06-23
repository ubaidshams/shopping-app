import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import SubNavbar from "./components/subnavbar/SubNavbar";

const App = () => {
  AOS.init();
  return (
    <div>
      <Router>
        <Navbar />
        <SubNavbar/>
        <CustomRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
