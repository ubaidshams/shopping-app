import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import SubNavbar from "./components/subnavbar/SubNavbar";
import Footer from "./components/footer/Footer";
import PersistentLogin from "./components/PersistentLogin/PersistentLogin";

const App = () => {
  AOS.init({ once: true });
  return (
    <div>
      <Router>
        <PersistentLogin>
          <ToastContainer />
          <Navbar />
          <SubNavbar />
          <CustomRoutes />
          {/* <Footer /> */}
        </PersistentLogin>
      </Router>
    </div>
  );
};

export default App;
