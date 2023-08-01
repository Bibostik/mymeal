import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='bg-slate-200'>
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:w-1/2 px-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 py-6">
            Welcome to My Meal Food App
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the best Food products and Meals here!
          </p>
          <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md focus:outline-none">
            Explore Now
          </button>
        </div>
        <div className="w-50 md:w-1/2 mt-6 md:mt-0">
          <img
            src="images/burger.png"
            alt="Hero Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
