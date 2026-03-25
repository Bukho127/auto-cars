import React from "react";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-16">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left Column */}
        <div className="space-y-10">

          <div>
            <h2 className="font-bold text-lg mb-2">Sales</h2>
            <p className="text-gray-600">
              <span className="underline cursor-pointer hover:text-black transition">Find your nearest Auto-Cars showroom</span>.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Vehicle Customer Support</h2>
            <p className="text-gray-600">
              <span className="underline cursor-pointer hover:text-black transition">Get answers</span> about your order, delivery, ownership and vehicle support.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Finance & Insurance Support</h2>
            <p className="text-gray-600">
              For support with vehicle financing, insurance options, and payment plans, call our support team toll free at{" "}
              <span className="underline cursor-pointer hover:text-black transition">0800 AUTO-CARS</span>{" "}
              and select option 2. For insurance queries, select option 3.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Roadside Assistance</h2>
            <p className="text-gray-600">
              Request roadside assistance through the Auto-Cars app.{" "}
              <span className="underline cursor-pointer hover:text-black transition">Find international phone numbers</span>{" "}
              for emergency roadside assistance.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Service & Maintenance</h2>
            <p className="text-gray-600">
              If your vehicle needs servicing, start by{" "}
              <span className="underline cursor-pointer hover:text-black transition">scheduling a service appointment</span>{" "}
              at your nearest Auto-Cars service centre.
            </p>
          </div>

        </div>

        {/* Right Column */}
        <div>
          <h2 className="font-bold text-lg mb-6">Press & Media</h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 mb-1">Africa</p>
              <p className="underline cursor-pointer hover:text-black transition text-gray-800">press@auto-cars.co.za</p>
            </div>

            <div>
              <p className="text-gray-600 mb-1">Durban</p>
              <p className="underline cursor-pointer hover:text-black transition text-gray-800">eupress@auto-cars.com</p>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;