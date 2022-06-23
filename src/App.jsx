import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import SubNavbar from "./components/subnavbar/SubNavbar";
import Footer from "./components/footer/Footer";

const App = () => {
  AOS.init({ once: true });
  return (
    <div>
      <Router>
        <ToastContainer />
        <Navbar />
        <SubNavbar />
        <CustomRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
