import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
    {/* Navigation Bar */}
  <div className="bg-gray-50 shadow-md">
  <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-center">
      <div className="flex space-x-10">
        <Link to="/home" className="text-gray-900 hover:text-gray-600">Home</Link>
        <button type="button" className="text-gray-900 hover:text-gray-600" onClick={toggleDropdown}>
          Content
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg">
            <div className="py-1 bg-white rounded-md shadow-xs">
              <Link to="/humor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Financial Humor
              </Link>
              <Link to="/guidance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Financial Guidance
              </Link>
              <Link to="/conner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Parent Conner
              </Link>
            </div>
          </div>
        )}
        <Link to="/about" className="text-gray-900 hover:text-gray-600">About</Link>
        <button type="button" className="text-gray-900 hover:text-gray-600">logout</button>
      </div>
    </nav>
  </div>
</div>
      {/* Home Page  */}
      <div className='relative bg-gray-200'>
        <img src="img9.png" alt="Description" className='w-full h-96 object-cover'/>
        <div className='absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white'>
            <h2 className='text-5xl font-bold mb-4'>Bloombaby</h2>
            <p className='text-lg'>
              Your go-to destination for financial wellness and support during your parenting journey
            </p>
          </div>
        </div>
      </div>
      {/* Feature  */}
      <div className='bg-white p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Financial Humor */}
        <div className='p-6 border rounded-lg flex flex-col'>
          <img src="img.png" alt="Financial Humor" className='h-40 w-full object-cover object-center mb-4'/>
          <h2 className='text-2xl font-bold mb-2 text-center'><Link to="/humor">Financial Humor</Link></h2>
          <p className='text-lg text-gray-700 text-center'>
          Enjoy a collection of light-hearted quotes to bring some humor to your financial planning.
          </p>
        </div>
        {/* Financial Guidance */}
        <div className='p-6 border rounded-lg flex flex-col'>
          <img src="image.png" alt="Financial Guidance" className='h-40 w-full object-cover object-center mb-4'/>
          <h2 className='text-2xl font-bold mb-2 text-center'><Link to="/guidance">Financial Guidance</Link></h2>
          <p className='text-lg text-gray-700 text-center'>
          get resources and tips tailored for expectant parents to navigate your financial journey.
          </p>
        </div>
        {/* Parent Corner */}
        <div className='p-6 border rounded-lg flex flex-col'>
          <img src="img5.png" alt="Parent Corner" className='h-40 w-full object-cover object-center mb-4'/>
          <h2 className='text-2xl font-bold mb-2 text-center'><Link to="/conner">Parent Corner</Link></h2>
          <p className='text-lg text-gray-700 text-center'>
          <p className='text-lg text-gray-700 text-center'>
          Find advice and strategies for managing stress and navigating the challenges of parenthood with confidence.  .
          </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;



