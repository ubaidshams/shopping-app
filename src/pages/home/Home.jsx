import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselComp from "../../components/Carousel/CarouselComp";
import FeaturedProducts from "../../components/featured products/FeaturedProducts";
import Maincategory from "../../components/categories/Maincategory";
import ChatBot from "../../components/chatBot/ChatBot";

const Home = () => {
  return (
    <section className="homeBlock">
      <article>
        <ChatBot />
        <CarouselComp />
        <Maincategory />
        <FeaturedProducts />
      </article>
    </section>
  );
};

export default Home;
