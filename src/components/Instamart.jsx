import { FaShareNodes } from "react-icons/fa6";
import useInstamart from "../Hooks/useInstamart";
import { IMG_CDN } from "../Services/Endpoints";
import InstamartShimmer from "./Shimmer/InstamartShimmer";

const Instamart = () => {
  const items = useInstamart();
  const widgets = items?.data?.widgets[0]?.data; 

  if (!items) {
    return <InstamartShimmer />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        🛍️ Shop By Category
      </h1>
      {widgets && widgets.length > 0 ? (
        widgets.map((data, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            {data.displayName && (
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
                {data.displayName}
              </h2>
            )}
            {/* Filter out 'Newly added' and 'Top Picks' */}
            {data.nodes && data.nodes.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5">
                {data.nodes
                  .filter(node => node.displayName !== "Newly added" && node.displayName !== "Top Picks")
                  .map((node, idx) => (
                    <div
                      key={node.nodeId || idx}
                      className="relative group bg-white rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105"
                    >
                      {/* Image without shadow */}
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={IMG_CDN + node.imageId}
                          alt={node.displayName}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                        />
                      </div>
                      {/* Text overlay */}
                      <div className="p-3 text-center bg-gray-100">
                        <h3 className="text-sm font-medium text-gray-800">
                          {node.displayName}
                        </h3>
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
