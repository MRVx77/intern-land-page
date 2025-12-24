import React from "react";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
