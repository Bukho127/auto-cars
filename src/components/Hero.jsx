import HeroBackground from "./HeroImage";
import CarHighlightImages from "./CarHighlightImages";
import { RiArrowRightLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center pt-30 text-white text-center px-4">
      <HeroBackground />

      <h1 className="text-6xl font-bold mb-8">Premium Dealership</h1>
      <div className="flex gap-4">
        <NavLink to="/products">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4">
            Shop Now
          </button>
        </NavLink>
        <button className="bg-white hover:bg-gray-200 text-black py-1 px-6 flex items-center gap-2">
          Learn More <RiArrowRightLine />
        </button>
      </div>
      <CarHighlightImages />
    </div>
  );
};

export default Hero;
