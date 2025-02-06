import useInstamart from "../Hooks/useInstamart";
import { IMG_CDN } from "../Services/Endpoints";
import Shimmer from "./Shimmer";

const Instamart = () => {
  const items = useInstamart();
  const widgets = items?.data?.widgets; 

  if (!items) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16 lg:px-24">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#603F83FF] to-[#FF4F81] mb-10 drop-shadow-lg flex justify-center items-center h-full">
        SHOP BY CATEGORY
      </h1>

      {widgets && widgets.length > 0 ? (
        widgets.map((widget, index) => (
          <div key={index} className="mb-12">
            {/* Widget Title */}
            {widget.name && (
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {widget.name}
              </h2>
            )}

            {/* Iterate over widget.data if it exists */}
            {widget.data && Object.keys(widget.data).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {Object.values(widget.data).flat().map((data, idx) => (
                  <div
                    key={data.nodeId || idx}
                    className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={IMG_CDN + data.imageId}
                      alt={data.displayName}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#603F83FF]">
                        {data.displayName}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-lg text-gray-500">
                No items available in this category
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center text-lg text-gray-500">
          No categories available
        </div>
      )}
    </div>
  );
};

export default Instamart;
