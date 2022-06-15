import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
import Login from "./pages/auth/Login"

const App = () => {
  return (
    <Router>
      <Navbar />
      <CustomRoutes />
      <Footer />
      <Login/>
    </Router>
  );
};

export default App;
