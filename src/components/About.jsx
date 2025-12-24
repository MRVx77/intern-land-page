import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <div className="group w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 overflow-hidden transition">
            <span className="transition-transform duration-300 group-hover:scale-105">
              Image
            </span>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Us
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a
            href="https://www.linkedin.com/company/sammunat/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="300"
            className="inline-block px-6 py-3 bg-slate-900 text-white rounded-xl mb-6 transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </a>

          <ul
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex items-center gap-6 text-2xl text-gray-700"
          >
            <li>
              <a
                href="https://www.linkedin.com/company/sammunat/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-blue-600 hover:scale-125"
              >
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/sammunat_llc?igsh=NWFrMXVzaWpodjZl"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-pink-500 hover:scale-125"
              >
                <FaInstagram />
              </a>
            </li>

            <li>
              <a
                href="https://whatsapp.com/channel/0029VbAgR4SFMqrhDNF3l11T"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-green-500 hover:scale-125"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
