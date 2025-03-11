import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Homepagehero from "../../Components/Homepagehero/Homepagehero";
import Categories from "../../Components/Categories/Categories";
import ProductsDisplay from "../../Components/ProductsDisplay/ProductsDisplay";
import Cta from "../../Components/Cta/Cta";
import Features from "../../Components/Features/Features";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepagehero />
      <Categories />
      <ProductsDisplay />
      <Cta />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
