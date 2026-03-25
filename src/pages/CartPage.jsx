import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slice";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useState } from "react";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
 const [checkout, setCheckout] = useState(false);
  
  const handleCheckout= ()=>{
    setCheckout(true);
    setTimeout(()=>{
      setCheckout(false);
    }, 2000);

  }

  const { RiveComponent, rive } = useRive({
    src: "/animations/5225-10455-market-basket.riv",
    stateMachines: "basket",
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, "basket", "Hover");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div
          className="w-64 h-64"
          onMouseEnter={() => {
            if (hoverInput) hoverInput.value = true;
          }}
          onMouseLeave={() => {
            if (hoverInput) hoverInput.value = false;
          }}
        >
          <RiveComponent />
        </div>
        <h2 className="text-3xl font-bold mt-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added any cars yet.
        </p>
        <NavLink
          to="/products"
          className="mt-6 bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
        >
          Browse Cars
        </NavLink>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-28 px-4">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border border-gray-100 rounded-xl p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm">
                {item.category} · {item.year}
              </p>
              <p className="font-semibold mt-1">
                R {item.price.toLocaleString()}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">Qty</p>
              <p className="font-bold text-lg">{item.quantity}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-black text-white text-sm px-4 py-2 hover:bg-gray-800 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <p className="text-2xl font-bold">Total: R {total.toLocaleString()}</p>
        <button className="mt-4 bg-black text-white px-8 py-3 hover:bg-gray-800 transition" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
        {checkout && (
        <div className="flex justify-center items-center mt-6">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default CartPage;
