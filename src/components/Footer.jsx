import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            SAMMUNAT LLC USA
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md">
            A US-based multinational IT company specializing in digital products
            and services, operating across the UAE and India.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Contact Information
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="font-medium text-gray-300">Email:</span>{" "}
              dummy@gmail.com
            </li>
            <li>
              <span className="font-medium text-gray-300">Phone:</span> +1
              123-456-7890
            </li>
            <li>
              <span className="font-medium text-gray-300">Address:</span> 1234
              Elm Street, Springfield, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SAMMUNAT LLC USA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
