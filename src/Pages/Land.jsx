import React from 'react';
import { Link } from 'react-router-dom';

const Land = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-cover bg-center">
        <img src="img13.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-6 max-w-3xl">
          <h1 className="text-6xl font-bold mb-4">Welcome to BloomBaby</h1>
          <p className="text-2xl mb-8">Your ultimate financial wellness platform for expectant parents.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/home">Get Started</Link>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="image.png" alt="Feature 1" className="w-full h-48 object-cover mb-4 rounded-lg"/>
              <h3 className="text-2xl font-bold mb-2">Financial Guidance</h3>
              <p className="text-gray-600">Access expert-curated articles and resources to help you make informed financial decisions during your pregnancy.</p>
            </div>
            <div className="text-center">
              <img src="img.png" alt="Feature 2" className="w-full h-48 object-cover mb-4 rounded-lg"/>
              <h3 className="text-2xl font-bold mb-2">Financial Humor</h3>
              <p className="text-gray-600">Enjoy a collection of light-hearted quotes to add some humor and relief to your financial planning process.</p>
            </div>
            <div className="text-center">
              <img src="img5.png" alt="Feature 3" className="w-full h-48 object-cover mb-4 rounded-lg"/>
              <h3 className="text-2xl font-bold mb-2">Parents Corner</h3>
              <p className="text-gray-600">Discover advice and articles tailored for expectant parents, offering strategies to manage the challenges of parenthood.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8">Sign up today and start your journey towards financial wellness with BloomBaby.</p>
          <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded">
            <Link to="/home">Sign Up Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Land;

