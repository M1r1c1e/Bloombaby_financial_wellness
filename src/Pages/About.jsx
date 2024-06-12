import React from 'react';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img src="img10.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative bg-black bg-opacity-30 backdrop-blur-md shadow-md rounded-lg p-10 max-w-3xl w-full z-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">About BloomBaby</h1>
        <p className="text-xl text-white mb-4 text-center">
          Welcome to BloomBaby, the ultimate financial wellness platform for expectant parents. At BloomBaby, we understand that preparing for a new family member brings joy and financial challenges. Our mission is to empower you with the tools, resources, and support you need to navigate this exciting journey with confidence and peace of mind.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-center text-white">What We Offer</h2>
        <ul className="text-xl text-white list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Financial Guidance:</span> Access expert-curated articles and resources to help you make informed financial decisions during your parenting journey.
          </li>
          <li className="mb-2">
            <span className="font-bold">Financial Humor:</span> Enjoy a collection of light-hearted quotes to add some humor and relief to your financial planning process.
          </li>
          <li className="mb-2">
            <span className="font-bold">Parents Corner:</span> Discover advice and articles tailored for expectant parents, offering strategies to manage the challenges of parenthood.
          </li>
        </ul>
        <p className="text-xl text-white text-center mt-4">
          At BloomBaby, we are dedicated to supporting you every step of the way. Join our community today and let’s bloom together into this beautiful journey of parenthood.
        </p>
      </div>
    </div>
  );
};

export default About;


