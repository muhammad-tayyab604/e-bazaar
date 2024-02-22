import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard heading={"Our Latest Collection"} />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
