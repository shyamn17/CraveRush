const InstamartShimmer = () => {
    return (
      <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16 lg:px-24">
        <h1 className="text-3xl font-bold text-gray-300 text-center mb-10">
          🛍️ Loading Categories...
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
          {Array(12).fill("").map((_, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden border border-gray-200 animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200"></div>
  
              {/* Text Placeholder */}
              <div className="p-3 text-center bg-gray-100">
                <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InstamartShimmer;
  