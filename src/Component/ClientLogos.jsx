import React from "react";

import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo.png";
import logo3 from "../assets/logo.png";
import logo4 from "../assets/logo.png";
import logo5 from"../assets/logo.png";
import logo6 from "../assets/logo.png";
import logo7 from "../assets/logo.png";
import logo8 from "../assets/logo.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const ClientLogos = () => {
  return (
    <div className="relative bg-white overflow-hidden py-10">
      <h2 className="text-2xl font-bold text-center mb-8 underline text-gray-800">
        Our Recruiters
      </h2>

      {/* Blur overlays on left and right */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="w-full overflow-hidden relative">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Client ${idx + 1}`}
              className="h-20 w-auto object-contain inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
