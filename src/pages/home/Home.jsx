import React, { useEffect, useState } from "react";
import { axios } from "axios";
import CarouselComp from "../../components/Carousel/CarouselComp";
import FeaturedProducts from "../../components/featured products/FeaturedProducts";

const Home = () => {
  return (
    <section className="homeBlock">
      <article>
        <CarouselComp />
        <FeaturedProducts />
      </article>
    </section>
  );
};

export default Home;
