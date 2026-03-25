import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Slice";
import Spinner from "../components/Spinner";

function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const [buying, setBuying] = useState(false);

  const handleBuyNow = () => {
    setBuying(true);
    setTimeout(() => {
      setBuying(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-6">
      <div className="bg-gray-100 rounded-2xl p-10 mb-8 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-96 object-contain"
        />
      </div>

      <div className="flex justify-between items-center mb-3">
        <span className="border border-gray-300 rounded-full px-4 py-1 text-sm">
          {product.category}
        </span>
        <span className="text-sm text-gray-500">{product.year}</span>
      </div>

      <h1 className="text-4xl font-bold mb-3">{product.name}</h1>

      <p className="text-gray-500 text-base leading-relaxed mb-6">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {[product.fuel, product.transmission, product.wheelDrive].map(
          (tag, i) => (
            <span
              key={i}
              className="border border-gray-300 rounded-full px-4 py-1 text-sm"
            >
              {tag}
            </span>
          ),
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Torque", value: product.torque },
          { label: "Acceleration", value: product.Acceleration },
          { label: "Mass", value: product.Mass },
          { label: "Doors", value: product.doors },
          { label: "Interior", value: product.interior },
          { label: "Drive", value: product.wheelDrive },
        ].map((spec, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">{spec.label}</p>
            <p className="text-base font-semibold">{spec.value}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-6">
        R {product.price.toLocaleString()}
      </h2>

      <div className="flex gap-4">
        <button
          className="flex-1 py-4 border border-black bg-white text-base cursor-pointer hover:bg-gray-50 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
        <button
          className="flex-1 py-4 bg-black text-white text-base cursor-pointer hover:bg-gray-800 transition flex items-center justify-center"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
      {buying && (
        <div className="flex justify-center items-center mt-6">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
