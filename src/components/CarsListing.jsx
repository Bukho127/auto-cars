
import cars from "../data/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Slice"
import { useNavigate } from 'react-router-dom';

function CarsListing() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Our Collection</h2>
      <div className="w-12 h-1 bg-gray-500 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group border border-gray-100"
          >
       
            <div className="overflow-hidden h-52 bg-gray-50">
              <img
                src={car.image}
                alt={car.name}
                className={`w-full h-full group-hover:scale-105 transition duration-500 ${
                  car.fit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </div>

            <div className="p-5">
             
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gray-100 text-black text-xs border border-gray-200 font-semibold px-3 py-1 rounded-full">
                  {car.category}
                </span>
                <span className="text-gray-400 text-xs font-semibold">
                  {car.year}
                </span>
              </div>

          
              <h3 className="text-lg font-bold mb-1">{car.name}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-3">{car.description}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {car.fuel}
                </span>

                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {car.transmission}
                </span>

                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {car.wheelDrive}
                </span>
              </div>
              <p className="text-2xl font-bold text-black mb-4">
                R {car.price.toLocaleString()}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(addToCart(car))}
                  
                  className="flex-1 bg-transparent border border-black text-sm font-semibold py-2 px-4 hover:bg-gray-100 cursor-pointer transition "
                >
                  Add to Cart
                </button>
                <button className="flex-1 bg-black hover:bg-gray-800 text-white text-sm font-semibold py-2 px-4 cursor-pointer transition" onClick={() => navigate(`/products/${car.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsListing;
