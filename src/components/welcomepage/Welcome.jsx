import { Container } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import welcomeStyle from "./welcome.module.css";

function Welcome() {
  return (
    <section>
      <Navbar/>
      <article className={welcomeStyle.welcomesection}>
        <div className={welcomeStyle.mainHead}>
          <div className={welcomeStyle.headings1}>
            <h5>Shop With Us</h5>
            <h1>NEW ARRIVALS</h1>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2019/09/22/08/15/woman-4495395_960_720.png"
            alt=""
            width="40%"
          />
        </div>
      </article>
      <div className={welcomeStyle.divbg}>
        <h1>New Collections Here</h1>
      </div>
    </section>
  );
}

export default Welcome;
