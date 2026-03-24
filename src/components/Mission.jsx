import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
function Mission() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to redefine the car buying experience by offering an
        exceptional selection of premium and luxury vehicles, backed by
        world-class customer service and expert automotive knowledge.
      </p>
      <div className="flex justify-center">
        <button className="bg-transparent border border-black hover:bg-black text-black hover:text-white py-3 px-4 flex items-center gap-2">
          Learn More <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
}

export default Mission;
