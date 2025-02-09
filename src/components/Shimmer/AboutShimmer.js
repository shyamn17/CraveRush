import React from "react";

const AboutShimmer = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16 lg:px-24">
      {/* Page Title Placeholder */}
      <div className="flex justify-center">
        <div className="h-10 w-64 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Paragraph Placeholder */}
      <div className="mt-8 space-y-4 max-w-6xl mx-auto">
        {Array(5).fill("").map((_, index) => (
          <div key={index} className="h-4 w-full bg-gray-300 rounded-lg animate-pulse"></div>
        ))}
      </div>

      {/* Section Title Placeholder */}
      <div className="mt-12 flex justify-center">
        <div className="h-8 w-80 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Feature Cards Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Array(3).fill("").map((_, index) => (
          <div key={index} className="relative bg-white rounded-lg overflow-hidden border border-gray-200 animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-4 w-full bg-gray-300 rounded-lg"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded-lg mt-2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Reviews Section Placeholder */}
      <div className="bg-gray-200 p-8 mt-12 rounded-lg">
        <div className="flex justify-center">
          <div className="h-8 w-80 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {Array(2).fill("").map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-4 w-full bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded-lg"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded-lg mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutShimmer;
