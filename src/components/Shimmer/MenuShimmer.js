import React from 'react';

const MenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      <div className="flex flex-col p-4 bg-gray-200 rounded-lg shadow-md animate-pulse">
        {/* First Row: Image + Title */}
        <div className="flex items-center space-x-4 mb-2">
          {/* Left: Image */}
          <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
          {/* Right: Title */}
          <div className="flex-1">
            <div className="h-5 bg-gray-400 rounded w-1/2 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Menu shimmer items */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center space-x-6 animate-pulse">
          {/* Left: Content */}
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-10 bg-gray-300 rounded w-20 mt-2"></div> {/* Button */}
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>

          {/* Right: Image */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-400 rounded w-28"></div> {/* Button */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuShimmer;
