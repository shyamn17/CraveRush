import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Services/Endpoints";
import Shimmer from "./Shimmer";
import useRestaurant from "../Hooks/useRestaurant";
import { addItem } from "../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import veg from "../Assets/veg.jpg";  
import nonveg from "../Assets/nonveg.jpg";  

const getVegSymbol = (vegClassifier) => {
  const commonStyles = "w-5 h-5"; 
  if (vegClassifier === "VEG") {
    return ( <img src={veg} alt="Veg" className={`${commonStyles}`} /> );
  } else {
    return (<img src={nonveg} alt="Non-Veg" className={`${commonStyles}`} />);
  }
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();

  const addFoodItem = (itemCards) => {
    dispatch(addItem(itemCards));
  };

  if (!restaurant) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;
  const menuItems = restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  console.log(menuItems);

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl p-8 bg-[#603F83FF] text-white rounded-lg shadow-2xl mb-10">
        <div className="flex items-center">
          <div className="w-36 h-36 mr-8">
            <img
              src={IMG_CDN + restaurantInfo?.cloudinaryImageId}
              alt={restaurantInfo?.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold tracking-wide">{restaurantInfo?.name}</h1>
            <div className="flex items-center space-x-3 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path d="M12 2C8.13 2 5 5.13 5 8.5c0 3 3 6 7 10 4-4 7-7 7-10 0-3.37-3.13-6.5-7-6.5zM12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
              <p className="text-lg">{restaurantInfo?.locality}</p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h-2v6h2zm0 8h-2v2h2z" />
              </svg>
              <p className="text-lg">{restaurantInfo?.costForTwoMessage}</p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
              </svg>
              <p className="text-lg">{restaurantInfo?.sla?.deliveryTime} mins</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-4xl p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#603F83FF] mb-6">Menu</h2>
        <ul className="space-y-6">
          {menuItems ? (
            Object.values(menuItems).map((itemCards) => (
              <li key={itemCards?.card?.info?.id} className="flex justify-between items-start bg-[#F9FAFB] rounded-lg shadow-md p-5 hover:shadow-2xl transition duration-300">
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center mb-3 space-x-3">
                    {getVegSymbol(itemCards?.card?.info?.itemAttribute?.vegClassifier)}
                    </div>
                    <h3 className="text-xl font-semibold text-[#000000]">{itemCards?.card?.info?.name}</h3>
                        <p className="text-lg font-semibold text-[#603F83FF]">
                    ₹ {itemCards?.card?.info?.defaultPrice / 100}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 mr-4">{itemCards?.card?.info?.description}</p>
                </div>
                <div className="flex flex-col items-center">
  <div className="w-32 h-32 relative">
    <img
      src={IMG_CDN + itemCards?.card?.info?.imageId}
      alt={itemCards?.card?.info?.name}
      className="rounded-t-md object-cover w-full h-full"
    />
  </div>
  <button
    className="bg-[#603F83FF] text-white text-sm px-4 py-2 w-32 rounded-b-md hover:bg-[#503F73] transition duration-300 -mt-6 translate-y-1/4"
    onClick={() => addFoodItem(itemCards)}
  >
    Add
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
