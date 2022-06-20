import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <CustomRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
