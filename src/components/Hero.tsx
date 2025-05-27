import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Connect with Developers Worldwide
        </h1>
        <p className="text-lg mb-8">
          DevConnect is your gateway to a global community of developers.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
