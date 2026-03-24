import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import IntroImage from "../assets/images/BMW_Interior.jpg";
function CompanyIntroduction() {
  return (
    <section className="container mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-8">
      <div>
        <h2 className="text-5xl font-bold mb-4">Drive the Extraordinary</h2>
        <p className="text-lg mb-6 text-gray-700">
          At Auto Cars, we believe that driving should be more than just getting
          from point A to point B — it should be an experience. Founded with a
          passion for premium automotive excellence, we specialize in curating
          the world's finest vehicles for discerning drivers who demand nothing
          but the best.
        </p>
        <button className="bg-blue-500 hover:bg-black text-white py-3 px-4 flex items-center gap-2">
          Learn More <RiArrowRightLine />
        </button>
      </div>
      <div className="w-600">
        <img src={IntroImage} alt="Company Introduction" />
      </div>
    </section>
  );
}

export default CompanyIntroduction;
