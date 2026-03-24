import React from "react";
import image1 from "../assets/images/Urus.webp";
import image2 from "../assets/images/BMW_X5.png";
import image3 from "../assets/images/sales_person.jpg";
import { RiArrowRightSLine } from 'react-icons/ri'

function ProductHighlights() {
  const productHighlight = [
    {
      id: 1,
      title: "Wide Selection of Cars",
      description: "Explore our extensive collection of premium and luxury vehicles from the world's most prestigious brands.",
      image: image1,
      badge: "Premium Fleet",
    },
    {
      id: 2,
      title: "Competitive Pricing",
      description: "Get the best deals on your dream car with our competitive pricing and flexible financing options.",
      image: image2,
      badge: "Best Value",
    },
    {
      id: 3,
      title: "Expert Guidance",
      description: "Our knowledgeable team is here to help you find the perfect car that suits your lifestyle and budget.",
      image: image3,
      badge: "Top Service",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-12 px-4">
      {productHighlight.map((highlight) => (
        <div
          key={highlight.id}
          className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition group"
        >
          
          <div className="overflow-hidden h-56">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6">
            <span className="bg-gray-100 border border-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
              {highlight.badge}
            </span>
            <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
            <div className="w-10 h-1 bg-black mb-3"></div>
            <p className="text-gray-600 text-sm mb-4">{highlight.description}</p>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm w-full flex items-center justify-center gap-4">
              Explore Now
              <RiArrowRightSLine/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductHighlights;