import useInstamart from "../Hooks/useInstamart";
import { IMG_CDN } from "../Services/Endpoints";
import Shimmer from "./Shimmer";

const Instamart = () => {
  const items = useInstamart();
  const martinfo = items?.data?.widgets[1]?.data;

  if (!items) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-16 lg:px-24 ">
     <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#603F83FF] to-[#FF4F81] mb-10 drop-shadow-lg flex justify-center items-center h-full">
        SHOP BY CATEGORY
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {martinfo && martinfo.length > 0 ? (
          martinfo.map((data) => (
            <div
              key={data.nodeId}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={IMG_CDN + data.imageId}
                alt={data.displayName}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#603F83FF]">{data.displayName}</h3>
                <p className="text-sm text-gray-500 mt-2">{data.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-500">
            No menu items available
          </div>
        )}
      </div>
    </div>
  );
};

export default Instamart;
