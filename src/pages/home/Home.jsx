import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselComp from "../../components/Carousel/CarouselComp";
import FeaturedProducts from "../../components/featured products/FeaturedProducts";
import Maincategory from "../../components/categories/Maincategory";

const Home = () => {
  return (
    <section className="homeBlock">
      <article>
        <CarouselComp />
        <Maincategory />
        <FeaturedProducts />
      </article>
    </section>
  );
};

export default Home;
