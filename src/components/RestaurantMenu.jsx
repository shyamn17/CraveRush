import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Services/Endpoints";
import MenuShimmer from "./Shimmer/MenuShimmer";
import useRestaurant from "../Hooks/useRestaurant";
import { addItem } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import veg from "../Assets/veg.jpg";
import nonveg from "../Assets/nonveg.jpg";

const getVegSymbol = (vegClassifier) => {
  const commonStyles = "w-5 h-5";
  if (vegClassifier === "VEG") {
    return <img src={veg} alt="Veg" className={`${commonStyles}`} />;
  } else {
    return <img src={nonveg} alt="Non-Veg" className={`${commonStyles}`} />;
  }
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, isLoading } = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (itemCard) => {
    dispatch(addItem(itemCard));
  };

  if (isLoading) {
    return <MenuShimmer />;
  }

  if (!restaurant) {
    return <MenuShimmer />;
  }

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;

  // Recursive function to find menu items
  const findMenuItems = (data) => {
    let items = [];

    const traverse = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (
          obj.hasOwnProperty("type") &&
          obj.type === "ITEM" &&
          obj.hasOwnProperty("name") &&
          obj.hasOwnProperty("description") &&
          obj.hasOwnProperty("price") &&
          obj.hasOwnProperty("imageId")
        ) {
          items.push(obj);
        } else {
          for (const key in obj) {
            traverse(obj[key]);
          }
        }
      }
    };

    traverse(data);
    return items;
  };

  const menuItems = findMenuItems(restaurant);
  console.log("MenuItems:", menuItems);

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl p-8 bg-[#603F83FF] text-[#ffffff] rounded-lg shadow-2xl mb-10">
        <div className="flex items-center">
          <div className="w-36 h-36 mr-8">
            <img
              src={IMG_CDN + restaurantInfo?.cloudinaryImageId}
              alt={restaurantInfo?.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold tracking-wide">
              {restaurantInfo?.name}
            </h1>
            <div className="flex items-center space-x-3 mt-3">
              {/* Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-lg text-[#c8c6c6]">{restaurantInfo?.locality}</p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              {/* Wallet/Money Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                <path d="M16 2v4"></path>
                <path d="M8 2v4"></path>
                <path d="M3 10h18"></path>
              </svg>
              <p className="text-lg text-[#c8c6c6]">
                {restaurantInfo?.costForTwoMessage}
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              {/* Clock/Time Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <p className="text-lg text-[#c8c6c6] ">
                {restaurantInfo?.sla?.deliveryTime} mins
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl p-8 rounded-lg mt-0">
        <h2 className="text-2xl font-bold text-[#250d3e] mb-6">Top Picks</h2>
        <ul className="space-y-6">
          {menuItems ? (
            menuItems.map((item) => (
              <li
                key={item?.id}
                className="flex justify-between items-start bg-[#F9FAFB] rounded-lg shadow-md p-5 hover:shadow-2xl transition duration-300"
              >
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center mb-3 space-x-3">
                    {getVegSymbol(item?.itemAttribute?.vegClassifier)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000]">
                    {item?.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#603F83FF] mt-1">
                    ₹{" "}
                    {(item?.price
                      ? item?.price
                      : item?.finalPrice) /
                      100}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 mr-4">
                    {item?.description}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative">
                    <img
                      src={IMG_CDN + item?.imageId}
                      alt={item?.name}
                      className="rounded-t-md object-cover w-full h-full"
                    />
                  </div>
                  <button
                    className="bg-[#603F83FF] text-white px-4 py-2 w-32 rounded-b-md hover:bg-[#503F73] transition duration-300 -mt-6 translate-y-1/4 flex items-center justify-center"
                    onClick={() => addFoodItem(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-xl">No menu items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
