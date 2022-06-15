import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <CustomRoutes />
      <Footer />
    </Router>
  );
};

export default App;
