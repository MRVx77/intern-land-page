import React from "react";

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-100">
      {/* Heading */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-gray-900"
      >
        Our Services
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-center text-gray-600 mb-16 text-base md:text-lg"
      >
        The services provided by our company
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-3xl shadow-md p-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          <div className="w-full h-48 bg-gray-200 rounded-2xl mb-8 flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Service 1
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            About service 1. Brief description explaining the value and benefits
            of this service.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className="bg-white rounded-3xl shadow-md p-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          <div className="w-full h-48 bg-gray-200 rounded-2xl mb-8 flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Service 2
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Combined offerings that deliver scalable, reliable, and innovative
            digital solutions.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-white rounded-3xl shadow-md p-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          <div className="w-full h-48 bg-gray-200 rounded-2xl mb-8 flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Service 3
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Deliver scalable, reliable, and innovative digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
