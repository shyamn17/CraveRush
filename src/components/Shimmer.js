import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-6 mb-16">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg shadow-md animate-pulse"
        >
          <div className="h-40 bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
