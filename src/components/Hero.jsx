import React from "react";
import logo from "../assets/logo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 text-center bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <img
        src={logo}
        alt="SAMMUNAT Logo"
        data-aos="zoom-in"
        className="w-28 h-28 mb-6 rounded-full shadow-lg object-cover"
      />

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-3xl md:text-5xl font-bold tracking-wide mb-4"
      >
        SAMMUNAT LLC USA
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="mb-6 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed"
      >
        A US-based multinational IT company specializing in digital products and
        services, operating across the UAE and India.
      </p>
    </section>
  );
};

export default Hero;
