import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Services/Endpoints";
import MenuShimmer from "./Shimmer/MenuShimmer";
import useRestaurant from "../Hooks/useRestaurant";
import { addItem } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import veg from "../Assets/veg.jpg";
import nonveg from "../Assets/nonveg.jpg";

const getVegSymbol = (vegClassifier) => {
    return (
        <img 
            src={vegClassifier === "VEG" ? veg : nonveg} 
            alt={vegClassifier === "VEG" ? "Veg" : "Non-Veg"} 
            className="w-5 h-5" 
        />
    );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, isLoading, isError } = useRestaurant(resId);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (isLoading) return <MenuShimmer />;
  if (isError) return <p className="text-center text-red-500">Failed to load menu. Please try again later.</p>;
  if (!restaurant) return <MenuShimmer />;

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;

  // Recursive function to extract menu items
  const findMenuItems = (data) => {
    let items = [];
    const traverse = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (
          obj.hasOwnProperty("type") && obj.type === "ITEM" &&
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
  console.log("Menu Items:", menuItems);

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-10 flex flex-col items-center">
      {/* Restaurant Info */}
      <div className="w-full max-w-4xl p-8 bg-[#603F83FF] text-white rounded-lg shadow-2xl mb-10">
        <div className="flex items-center">
          <img
            src={IMG_CDN + restaurantInfo?.cloudinaryImageId}
            alt={restaurantInfo?.name}
            className="w-36 h-36 object-cover rounded-lg shadow-md mr-8"
          />
          <div>
            <h1 className="text-3xl font-semibold">{restaurantInfo?.name}</h1>
            <p className="text-lg text-[#c8c6c6] mt-3">{restaurantInfo?.locality}</p>
            <p className="text-lg text-[#c8c6c6]">{restaurantInfo?.costForTwoMessage}</p>
            <p className="text-lg text-[#c8c6c6]">{restaurantInfo?.sla?.deliveryTime} mins</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="w-full max-w-4xl p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-[#250d3e] mb-6">Top Picks</h2>
        <ul className="space-y-6">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <li key={item?.id} className="flex justify-between items-start bg-[#F9FAFB] rounded-lg shadow-md p-5">
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center mb-3">{getVegSymbol(item?.itemAttribute?.vegClassifier)}</div>
                  <h3 className="text-xl font-semibold text-[#000000]">{item?.name}</h3>
                  <p className="text-lg font-semibold text-[#603F83FF] mt-1">
                    ₹{(item?.price ?? item?.finalPrice) / 100}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">{item?.description}</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={IMG_CDN + item?.imageId}
                    alt={item?.name}
                    className="w-32 h-32 rounded-t-md object-cover"
                  />
                  <button
                    className="bg-[#603F83FF] text-white px-4 py-2 w-32 rounded-b-md hover:bg-[#503F73] transition duration-300 mt-2 flex justify-center items-center"
                    onClick={() => addFoodItem(item)}
                  >
                    {/* FontAwesome Cart Icon */}
                    <i className="fas fa-cart-plus"></i> {/* This is the cart icon */}
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
