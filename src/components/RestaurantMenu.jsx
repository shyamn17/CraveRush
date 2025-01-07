import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN } from "./config";
import Shimmer from "./Shimmer";
import Error from "./Error";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=" + resId
      );
      const json = await data.json();
      console.log(json);
      if (json.data) {
        setRestaurant(json.data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }

  if (isError) {
    return <Error message="Restaurant data is currently unavailable" />;
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;
  const menuItems = restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  return (
    <div>
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurantInfo?.name}</h2>
        <img src={IMG_CDN + restaurantInfo?.cloudinaryImageId} alt={restaurantInfo?.name} />
        <h3>{restaurantInfo?.locality}</h3>
        <h3>{restaurantInfo?.costForTwoMessage}</h3>
        <h3>{restaurantInfo?.sla?.deliveryTime} mins</h3>
      </div>
      <div>
        <h1>Menu Items</h1>
        <ul>
          {menuItems ? (
            Object.values(menuItems).map((itemCards) => (
              <li key={itemCards?.card?.info?.id}>{itemCards?.card?.info?.name}</li>
            ))
          ) : (
            <li>No menu items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
